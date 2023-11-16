type LoginResponse = {
  accessToken: string;
};

type RegisterResponse = UserRecordType;

type LoginBody = {
  username: string;
  password: string;
};

type RegisterBody = {
  username: string;
  password: string;
  refCode: string;
};

type UpdateProfileBody = {
  bankName?: string;
  bankUserName?: string;
  bankUserNumber?: string;
  password?: string;
  balance?: number;
};

type UpdatePasswordBody = {
  oldPassword: string;
  newPassword: string;
};
