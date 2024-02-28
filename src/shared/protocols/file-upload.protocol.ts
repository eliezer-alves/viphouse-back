type IUploadedFile = {
  imageUrl: string;
  imageKey: string;
  bucket: string;
};

export abstract class IFileUploader {
  upload: (
    files: Express.Multer.File | Express.Multer.File[],
  ) => Promise<IUploadedFile[] | undefined>;
}
