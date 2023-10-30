import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';
import { EditProductComponent } from '../edit-product/edit-product.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  products: Array<Product> = [];

  constructor(private service: ApiService, private dialog: MatDialog){}

  ngOnInit(): void {
      this.loadProducts();
  }
  public loadProducts(){
    this.service.getProducts().subscribe
    (resp => {
      this.products = resp;
    });
  }

  public editProduct(product: Product){

    const dialogRef = this.dialog.open(EditProductComponent, { data: product, height: '400px', width: '350px' })
    
    dialogRef.afterClosed().subscribe(result => {
      this.loadProducts();
    })
  }

  public deleteProduct(id: number){
    this.service.deleteProduct(id).subscribe({
      next: ()=>{
        this.loadProducts();
        alert("Producto eliminado con exito");
      },
      error: () => {
        alert("No se ha podido eliminar el producto")
      }
    })
  }

}
