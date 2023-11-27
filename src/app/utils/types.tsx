export type taskResponse = {
  created_at: string;
  description: string;
  id: number;
  is_complete: boolean;
  name: string;
  position: number;
  user_id: number;
};

export type taskItem = {
  description: string;
  name: string;
  created_at: string;
  is_complete: boolean;
  id: number;
  position: number;
  user_id: number;
};

export type userDetail = {
  email: string;
  id: number;
  name: string;
  username: string;
};
