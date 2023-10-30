import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, User } from '../Models';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/productos`);
  }
  public editProduct(id: number, updateProduct: Product): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/productos/${id}`, updateProduct);
  }
  public deleteProduct(id: number): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/productos/${id}`)
    .pipe(map (resp => true),
    catchError (error => of(false))
    );
  }
  public addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/productos`, product);
  }
  public getToAuth(user: User): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/Users?email=${user.email}&password=${user.password}`);
  }
}
