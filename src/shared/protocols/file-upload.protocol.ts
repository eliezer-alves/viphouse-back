export abstract class IFileUploader {
  upload: (
    files: Express.Multer.File | Express.Multer.File[],
  ) => Promise<string | string[] | undefined>;
}
