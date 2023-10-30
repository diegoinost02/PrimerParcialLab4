export interface IUser {
    id?: number | null;
    email: string;
    password: string;
}

export interface IProduct {
    id?: number | null;
    description: string | null;
    price: number | null;
    stock: number | null;
}