import { Injectable } from "@angular/core";
import { User } from "../models/user.model";

@Injectable()
export class MockUserService { 
    getUser(): User { return new User(2, "Yong", "def"); }
}