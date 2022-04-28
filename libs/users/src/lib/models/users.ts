import {  Group } from "./group";
export class Users {
    id: number;
    username: string;
    active: string;
    email: string;
    status: string;
    channel:string;
    permissions:string[];
    roles: string[];
    groups: Group[]=[];
    mobileNumber: number;
    blocked: string;
    lastLoginDate: string;
}