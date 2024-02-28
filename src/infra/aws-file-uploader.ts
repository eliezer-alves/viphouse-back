import { S3 } from 'aws-sdk';
import { IFileUploader } from '../shared/protocols/file-upload.protocol';

export class AWSFileUploader implements IFileUploader {
  private s3Client: S3;

  private readonly bucketName = process.env.AWS_S3_BUCKET_NAME as string;
  private readonly locationConstraint = 'sa-east-1';

  constructor() {
    this.s3Client = new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });
  }

  private generateFileKey(
    file: Express.Multer.File,
    timestamp: number,
  ): string {
    return `${file.filename}-${timestamp}.${file.mimetype}`;
  }

  private async uploadFile(file: Express.Multer.File): Promise<string> {
    const timestamp = Date.now();
    file.filename = file.originalname;
    const fileKey = this.generateFileKey(file, timestamp);

    const params = {
      Bucket: this.bucketName,
      Key: fileKey,
      Body: file.buffer,
      // ACL: 'public-read',
      Name: file.originalname,
      ContentType: file.mimetype,
      ContentDisposition: 'inline',
      CreateBucketConfiguration: {
        LocationConstraint: this.locationConstraint,
      },
    };

    try {
      const s3Response = await this.s3Client.upload(params).promise();
      console.log(s3Response);
      return s3Response.Location;
    } catch (e) {
      console.log(e);
    }
  }

  async upload(
    files: Express.Multer.File | Express.Multer.File[],
  ): Promise<string | string[] | undefined> {
    try {
      if (Array.isArray(files)) {
        const paths = await Promise.all(
          files.map(async (file) => this.uploadFile(file)),
        );
        return paths;
      }

      const path = await this.uploadFile(files);
      return path;
    } catch {
      return undefined;
    }
  }
}
