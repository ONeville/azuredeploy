import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Item {
  id: number;
  name: string;
  quantity: number;
}

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.scss']
})
export class TesterComponent implements OnInit {
  items$: Observable<Array<Item>>;
  constructor() {}

  ngOnInit() {
    this.items$ = of([
      { id: 1, name: 'Mango Mango', quantity: 12 },
      { id: 2, name: 'Papaya Sweet', quantity: 2 },
      { id: 3, name: 'Kiwit kiaki', quantity: 3 },
      { id: 4, name: 'Berry Tondolo', quantity: 5 }
    ]);
  }

  public increaseQuantity(item: Item) {
    // this.items$ // .updateItemQuantity(item.id, item.quantity + 1);
  }

  public decreaseQuantity(item: Item) {
    if (item.quantity > 1) {
      // this.basketService.updateItemQuantity(item.id, item.quantity - 1);
    } else {
      this.removeItem(item);
    }
  }

  public removeItem(item: Item) {
    // this.basketService.remove(item.id);
  }

  public pay() {
    // this.paymentService.processOneClickPayment();
  }
}
