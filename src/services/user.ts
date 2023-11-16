import { client } from './axios';

const getProfile = (): Promise<UserRecordType> => client.get(`/api/users/me`);
const updateProfile = (body: UpdateProfileBody): Promise<UserRecordType> => client.put(`/api/users`, body);

const changePassword = (body: UpdatePasswordBody): Promise<UserRecordType> =>
  client.post(`/api/users/change-password`, body);
const changePasswordWithdraw = (body: UpdatePasswordBody): Promise<UserRecordType> =>
  client.post(`/api/users/change-password-withdraw`, body);

const fetchUsers = (params?: UserParams): Promise<UserPaginateType> => client.get(`/api/users`, { params });
const updateUser = ({ id, ...body }: UpdateUserBody): Promise<UserRecordType> => client.put(`/api/users/${id}`, body);
const createUser = (body: UserPayloadType): Promise<UserRecordType> => client.post(`/api/users`, body);
const deleteUser = ({ id }: { id: string }) => client.delete(`/api/users/${id}`);

const checkIpBank = (): Promise<any> => client.get(`/api/users/check-ip-bank`);

const userService = {
  getProfile,
  updateProfile,

  changePassword,
  changePasswordWithdraw,

  fetchUsers,
  updateUser,
  createUser,
  deleteUser,

  checkIpBank,
};
export default userService;
