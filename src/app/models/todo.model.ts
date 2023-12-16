import { UserModel } from "./user.model";

export interface CreateTodoModel {
  title: string;
  content: string;
}

export interface TodoModel {
  id: number;
  title: string;
  content: string;
  completed: boolean;
  authorId: number;
  createdAt: string;
  updatedAt: string;
  author: UserModel;
}
