import { Component } from '@angular/core';
import { AddressCardComponent } from "../../../shared/components/address-card/address-card.component";
import { CardItemComponent } from "../../../shared/components/card-item/card-item.component";
import { CommonModule } from '@angular/common';
import { MatDivider } from '@angular/material/divider';

@Component({
    selector: 'app-payment',
    standalone: true,
    templateUrl: './payment.component.html',
    styleUrl: './payment.component.css',
    imports: [AddressCardComponent, CardItemComponent,CommonModule,MatDivider]
})
export class PaymentComponent {
    products = [1,1,1]
}
