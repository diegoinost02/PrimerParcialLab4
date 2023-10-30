import { IUser, IProduct } from "./Interface";

export class User implements IUser {
    id?: number | null = null;
    email: string = '';
    password: string = '';

    constructor(user?: any) {
        this.id = user == undefined ? null : user.id;
        this.email = user == undefined ? '' : user.email;
        this.password = user == undefined ? '' : user.password;
    }
}
export class Product implements IProduct {
    id?: number | null;
    description: string | null;
    price: number | null;
    stock: number | null;

    constructor(product?: any) {
        this.id = product == undefined ? null : product.id;
        this.description = product == undefined ? null : product.description;
        this.price = product == undefined ? null : product.price;
        this.stock = product == undefined ? null : product.stock;
    }
}