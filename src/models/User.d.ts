type ProfileRecordType = UserRecordType & {
  accessToken?: string;
  isLoggedIn: boolean;
};

type UserRecordType = {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  username?: string;
  country?: string;
  refCode?: string;
  balance?: number;
  isVip?: number;
  role?: string;
  isActive?: boolean;
  bankName?: string;
  bankUserName?: string;
  bankUserNumber?: string;
  ip?: string;
};

type UserPaginateType = PaginateType & {
  items: UserRecordType[];
};

type UserParams = PaginateParams & {
  username?: string;
  refCode?: string;
};

type UpdateUserBody = UpdateProfileBody & {
  id: string;
};

type UserPayloadType = {
  username: string;
  password: string;
  refCode: string;
};
