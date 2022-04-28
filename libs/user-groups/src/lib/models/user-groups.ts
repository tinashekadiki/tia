import { User } from "./users";
export class UserGroups {
    data: any;
    id: number;
    name: string;
    description: string;
    permissions :string[];
    roles: string[];
    users: User[]=[];
}