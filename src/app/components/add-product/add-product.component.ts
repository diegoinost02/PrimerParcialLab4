import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  public product: Product = new Product();

  @Output() productAdded: EventEmitter<void> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private service: ApiService){}

  formProduct = this.formBuilder.group({
    'description': ['',Validators.required],
    'price':['',Validators.required],
    'stock':['',Validators.required]
  })
  get getDescription(){
    return this.formProduct.get('description') as FormControl;
  }
  get getPrice(){
    return this.formProduct.get('price') as FormControl;
  }
  get getStock(){
    return this.formProduct.get('stock') as FormControl;
  }
  public addProduct(){
    if(this.formProduct.valid) {
      this.product = new Product(this.formProduct.value);

      this.service.addProduct(this.product).subscribe({
        next: (resp) =>{
          alert("Producto agregado con éxito");
          this.productAdded.emit();
        },
        error: (error) => {
          alert('Error al agregar produco');
        }
      })
    }
  }
}
