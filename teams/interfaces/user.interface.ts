export interface IUserVariables {
  userId: string;
}

export interface IUserQuery {
  user?: User | null;
}

export type User = {
  id: string;
  displayName?: string | null;
};
