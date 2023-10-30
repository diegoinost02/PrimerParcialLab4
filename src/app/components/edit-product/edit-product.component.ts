import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{

  public product: Product = new Product();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private service: ApiService, private dialogRef: MatDialogRef<EditProductComponent>) { }

  formProduct = this.formBuilder.group({
    'id':[0],
    'description': ['',Validators.required],
    'price':[0,Validators.required],
    'stock':[0,Validators.required]
  })

  async ngOnInit() {
      this.product = this.data;
      await this.loadForm();
  }
  private loadForm() {
    if (this.product) {
      this.formProduct.patchValue({
        id: this.product.id,
        description: this.product.description,
        price: this.product.price,
        stock: this.product.stock
      });
    }
  }
  get getDescription() {
    return this.formProduct.get('description') as FormControl;
  }
  get getPrice(){
    return this.formProduct.get('price') as FormControl;
  }
  get getStock(){
    return this.formProduct.get('stock') as FormControl;
  }

  public editProduct() {
    this.product = new Product(this.formProduct.value);
    this.service.editProduct(this.product.id!, this.product).subscribe({
      next: () => {
        this.dialogRef.close(true)
        alert("Producto modificado con exito")
      }
        , error: (error) => alert(error)
    })
  }
  public closeDialog() {
    this.dialogRef.close(false);
  }
}
