import { BadRequestException } from '@nestjs/common';
import { IAssetRepository } from 'src/interfaces/asset.interface';
import { ClientEvent, IEventRepository } from 'src/interfaces/event.interface';
import { IJobRepository, JobName } from 'src/interfaces/job.interface';
import { TrashService } from 'src/services/trash.service';
import { assetStub } from 'test/fixtures/asset.stub';
import { authStub } from 'test/fixtures/auth.stub';
import { IAccessRepositoryMock, newAccessRepositoryMock } from 'test/repositories/access.repository.mock';
import { newAssetRepositoryMock } from 'test/repositories/asset.repository.mock';
import { newEventRepositoryMock } from 'test/repositories/event.repository.mock';
import { newJobRepositoryMock } from 'test/repositories/job.repository.mock';
import { Mocked } from 'vitest';

describe(TrashService.name, () => {
  let sut: TrashService;
  let accessMock: IAccessRepositoryMock;
  let assetMock: Mocked<IAssetRepository>;
  let jobMock: Mocked<IJobRepository>;
  let eventMock: Mocked<IEventRepository>;

  it('should work', () => {
    expect(sut).toBeDefined();
  });

  beforeEach(() => {
    accessMock = newAccessRepositoryMock();
    assetMock = newAssetRepositoryMock();
    eventMock = newEventRepositoryMock();
    jobMock = newJobRepositoryMock();

    sut = new TrashService(accessMock, assetMock, jobMock, eventMock);
  });

  describe('restoreAssets', () => {
    it('should require asset restore access for all ids', async () => {
      await expect(
        sut.restoreAssets(authStub.user1, {
          ids: ['asset-1'],
        }),
      ).rejects.toBeInstanceOf(BadRequestException);
    });

    it('should restore a batch of assets', async () => {
      assetMock.getByIds.mockResolvedValue([assetStub.trashed, assetStub.trashed]);
      accessMock.asset.checkOwnerAccess.mockResolvedValue(new Set([assetStub.trashed.id, assetStub.trashed.id]));

      await sut.restoreAssets(authStub.user1, { ids: [assetStub.trashed.id, assetStub.trashed.id] });

      expect(assetMock.restoreAll).toHaveBeenCalledWith([assetStub.trashed.id, assetStub.trashed.id]);
      expect(jobMock.queue.mock.calls).toEqual([]);
    });
  });

  describe('restore', () => {
    it('should handle an empty trash', async () => {
      assetMock.getByUserId.mockResolvedValue({ items: [], hasNextPage: false });
      await expect(sut.restore(authStub.user1)).resolves.toBeUndefined();
      expect(assetMock.restoreAll).not.toHaveBeenCalled();
      expect(eventMock.clientSend).not.toHaveBeenCalled();
    });

    it('should restore and notify', async () => {
      assetMock.getByUserId.mockResolvedValue({ items: [assetStub.trashed], hasNextPage: false });
      await expect(sut.restore(authStub.user1)).resolves.toBeUndefined();
      expect(assetMock.restoreAll).toHaveBeenCalledWith([assetStub.trashed.id]);
      expect(eventMock.clientSend).toHaveBeenCalledWith(ClientEvent.ASSET_RESTORE, authStub.user1.user.id, [
        assetStub.image.id,
      ]);
    });
  });

  describe('empty', () => {
    it('should handle an empty trash', async () => {
      assetMock.getByUserId.mockResolvedValue({ items: [], hasNextPage: false });
      await expect(sut.empty(authStub.user1)).resolves.toBeUndefined();
      expect(jobMock.queueAll).toHaveBeenCalledWith([]);
    });

    it('should empty the trash', async () => {
      assetMock.getByUserId.mockResolvedValue({ items: [assetStub.trashed], hasNextPage: false });
      await expect(sut.empty(authStub.user1)).resolves.toBeUndefined();
      expect(jobMock.queueAll).toHaveBeenCalledWith([
        { name: JobName.ASSET_DELETION, data: { id: assetStub.trashed.id, deleteOnDisk: true } },
      ]);
    });

    it('should not delete offline assets from disk', async () => {
      assetMock.getByUserId.mockResolvedValue({ items: [assetStub.trashedOffline], hasNextPage: false });
      await expect(sut.empty(authStub.user1)).resolves.toBeUndefined();
      expect(jobMock.queueAll).toHaveBeenCalledWith([
        { name: JobName.ASSET_DELETION, data: { id: assetStub.trashedOffline.id, deleteOnDisk: false } },
      ]);
    });
  });
});
