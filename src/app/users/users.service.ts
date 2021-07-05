import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    UserName: string | undefined;
    
    assignUserName(UserName: any): void {
        if(this.UserName == null || (this.UserName != UserName) && (UserName != null) || UserName != null) {
            this.UserName = UserName;
        }
    }
    getUserName(): any {
        return this.UserName;
    }
}