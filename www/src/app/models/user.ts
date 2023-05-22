import PocketBase, { Record } from 'pocketbase';



export class User {

    private nombre: any;
    private email: any;
    private password: any;
    private role: any;
    private image: any;

    constructor(nombre: string, email: string, password: string, role: string, image: string){
        nombre = this.nombre;
        email = this.email;
        password = this.password;
        role = this.role;
        image = this.image;
    }

    public getnombre() {
        return this.nombre;
    }
    public setnombre(value: string) {
        this.nombre = value;
    }

    public getemail() {
        return this.email;
    }
    public setemail(value: string) {
        this.email = value;
    }

    public getpassword() {
        return this.password;
    }
    public setpassword(value: string) {
        this.password = value;
    }
    
    public getrole() {
        return this.role;
    }
    public setrole(value: string) {
        this.role = value;
    }

    public getimage() {
        return this.image;
    }
    public setimage(value: string) {
        this.image = value;
    }

    public getUser(){
        this.nombre;
        this.email;
        this.password;
        this.role;
        this.image;
    }
}
