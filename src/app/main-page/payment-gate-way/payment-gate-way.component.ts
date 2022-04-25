import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-gate-way',
  templateUrl: './payment-gate-way.component.html',
  styleUrls: ['./payment-gate-way.component.scss'],
})
export class PaymentGateWayComponent implements OnInit {

  paymentHandler:any = null;

  constructor() { }


  ngOnInit() {
    this.invokeStripe();
  }

  initializePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51Kn4MASDhi9BdVNhzA4rNPNgDMirwVFU2KW8cllzBH1KKgRGeIvtPfMMLOijnHSYx3DzCQBtaz3snYAo7SdIUhp700IJiJgT5Y',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log({stripeToken})
        alert('Stripe token generated!');
      }
    });

    paymentHandler.open({
      name: 'CarLelo',
      description: 'Support Us By Donating Some...',
      amount: amount * 100
    });
  }

  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51Kn4MASDhi9BdVNhzA4rNPNgDMirwVFU2KW8cllzBH1KKgRGeIvtPfMMLOijnHSYx3DzCQBtaz3snYAo7SdIUhp700IJiJgT5Y',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Payment has been successfull!');
          }
        });
      }
      window.document.body.appendChild(script);
    }
  }

}
