import { Injectable } from '@angular/core';
 
@Injectable({
    providedIn:'root'
})
export class storage{
    constructor(){}
    public setUser(user: string , data: string){
        localStorage.setItem(user,data);
    }
    public getUser(user:string){
        return localStorage.getItem(user);
    }
    public logout(){
        localStorage.clear();
    }
}
