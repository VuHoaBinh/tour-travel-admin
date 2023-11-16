import { client } from './axios';

const uploadFile = (body: FormData): Promise<string> => client.post(`/api/s3/upload`, body);

const fileService = {
  uploadFile,
};
export default fileService;
