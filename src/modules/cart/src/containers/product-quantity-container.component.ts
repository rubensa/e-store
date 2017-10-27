import { ChangeDetectionStrategy, EventEmitter, Component, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as cartItem from '../actions/cart-item';
import { CartItem } from '../models/cart-item';
import * as fromCartItem from '../reducers';

@Component({
    selector: 'es-product-quantity',
    template:
    `
    {{quantity$|async}}
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductQuantityContainerComponent implements OnInit {
    quantity$: Observable<number>;
    @Input()
    productId: string;
    constructor(private store: Store<fromCartItem.State>) {
    }

    public ngOnInit(): void {
        this.quantity$ = this.store.select(fromCartItem.getCountByProductId(this.productId));
    }
}