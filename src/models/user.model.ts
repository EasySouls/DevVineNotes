import { TodoModel } from "./todo.model";

export interface CreateUserModel {
  name: string;
  email: string;
  role: Role;
}

export interface UserModel {
  id: number;
  name: string;
  email: string;
  role: Role;
  createdAt: string;
  updatedAt: string;
  todos: TodoModel[];
}

export type Role = "USER" | "MEMBER" | "ADMIN";
