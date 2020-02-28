export const typeDefs = ["type SayGoodByeResponse {\n  text: String!\n  error: Boolean!\n}\n\ntype Query {\n  sayBuy(name: String!): SayGoodByeResponse!\n  sayHello(name: String!): SayHelloRespone!\n  checkUser(name: String!): UserQueryRespone!\n}\n\ntype SayHelloRespone {\n  text: String!\n  error: Boolean!\n}\n\ntype User {\n  name: String!\n}\n\ntype UserQueryRespone {\n  user: User\n}\n"];
/* tslint:disable */

export interface Query {
  sayBuy: SayGoodByeResponse;
  sayHello: SayHelloRespone;
  checkUser: UserQueryRespone;
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

export interface UserQueryRespone {
  user: User | null;
}

export interface User {
  name: string;
}
