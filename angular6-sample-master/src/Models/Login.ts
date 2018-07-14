export class LoginResponse{
    constructor(public body: string, public id: string, public title:string, public userId: string){}
}
export class Users{
    constructor(public email:string,
    constructor(public id:Number,
    constructor(public name:string,
    constructor(public phone:string,
    constructor(public username:string,
    constructor(public website:string,
    "Sincere@april.biz"
id: 1
name:"Leane Graham"
phone: "1-770-736-8031 x56442"
username: "bret"
website:"hildegrade.org"){}
}

export class Geo{
    constructor(public lat:string, public lan:string){

    }
}


export class Address{
    constructor(){}
}
export class Company{
    constructor(public bs:string,
    public catchPhrase:string,
public name:string){}
}