import { Component } from "@angular/core";

@Component({
    selector: 'app-hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.css']
  })
export class HelloComponent {
    name: string;
    width: number = 200;
    height: number = 200;
    bgColor: string = '#4caf50';
    isShow: boolean = true;
    mySkill: string = 'HTML';
    users: User[];
    num: string;
    
    constructor() {
        this.name = '';
        this.users = [];
        this.num = '';
    }
    
    setName(name: string) { 
        this.name = name;
        console.log('name', this.name);
    }

    addUser(name: string) {
        this.users.push( {id: this.getNewUserId(), name});
    }

    removeUser(userid: number) {
        this.users = this.users.filter(({id}) => id !== userid);
    }

    getNewUserId(): number {
        console.log(this.users.map(({ id }) => id));
        return this.users.length ? Math.max(...this.users.map(({ id }) => id)) + 1 : 1;
    }

    trackByhUserId(index: number, user: User) {
        return user.id;
    }

    increaseWidth() { this.width = this.width + 10; }
    decreaseWidth() { this.width = this.width - 10; }
    increaseHeight() { this.height = this.height + 10; }
    decreaseHeight() { this.height = this.height - 10; } 
}

interface User {
    id: number;
    name: string;
}