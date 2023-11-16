type PaginateParams = {
  search?: string;
  page?: number;
  size?: number;
  orderBy?: string;
  desc?: string | number | boolean;
  populate?: string;
};

type PaginateType = {
  total: number;
  size: number;
  pages: number;
  currentPage: number;
};

type PopupController = {
  onSuccess?: () => void;
  onClose: () => void;
};

type CommonSearch = {
  page?: number;
  size?: number;
  [key: string]: Object;
};

type SearchController = {
  onChange: (search: CommonSearch) => void;
};

type CommonRecordType = {
  id: string;
  createdAt: string;
  updatedAt: string;
};
