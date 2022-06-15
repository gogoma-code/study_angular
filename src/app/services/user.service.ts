import { Injectable } from "@angular/core";
import { User } from "../models/user.model";

@Injectable()
export class UserService { 
    getUser(): User { return new User(1, "John", "abc"); }
}