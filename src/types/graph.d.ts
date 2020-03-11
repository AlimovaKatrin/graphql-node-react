export const typeDefs = ["type SayGoodByeResponse {\n  text: String!\n  error: Boolean!\n}\n\ntype Query {\n  sayBuy(name: String!): SayGoodByeResponse!\n  sayHello(name: String!): SayHelloRespone!\n  checkUser(name: String!): User!\n}\n\ntype SayHelloRespone {\n  text: String!\n  error: Boolean!\n}\n\ntype User {\n  _id: String\n  name: String\n  surName: String\n  nik: String\n  password: String\n  email: String\n}\n\ntype Mutation {\n  saveUser(name: String, surName: String, nik: String, password: String, email: String): User\n}\n"];
/* tslint:disable */

export interface Query {
  sayBuy: SayGoodByeResponse;
  sayHello: SayHelloRespone;
  checkUser: User;
}

export interface SayBuyQueryArgs {
  name: string;
}

export interface SayHelloQueryArgs {
  name: string;
}

export interface CheckUserQueryArgs {
  name: string;
}

export interface SayGoodByeResponse {
  text: string;
  error: boolean;
}

export interface SayHelloRespone {
  text: string;
  error: boolean;
}

export interface User {
  _id?: string | null;
  name: string | null;
  surName: string | null;
  nik: string | null;
  password: string | null;
  email: string | null;
}

export interface Mutation {
  saveUser: User | null;
}

export interface SaveUserMutationArgs {
  name: string | null;
  surName: string | null;
  nik: string | null;
  password: string | null;
  email: string | null;
}
