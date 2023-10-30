import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/core/Models';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent {

  @Input() inputProducts: Array<Product> = []
  @Output() productToDelete: EventEmitter<number> = new EventEmitter();
  @Output() productToEdit: EventEmitter<Product> = new EventEmitter();

  public deleteProduct(id: number){
    this.productToDelete.emit(id);
  }

  public editProduct(product: Product){
    this.productToEdit.emit(product);
  }

}
