import { Component, OnInit } from '@angular/core';
import {
  IPayPalConfig,
  ICreateOrderRequest 
} from 'ngx-paypal';
@Component({
    moduleId: module.id,
    selector: 'fixedplugin-cmp',
    templateUrl: 'fixedplugin.component.html'
})

export class FixedPluginComponent implements OnInit{
  public payPalConfig ? : IPayPalConfig;
  public sidebarColor: string = "white";
  public sidebarActiveColor: string = "danger";

  public state: boolean = true;

  changeSidebarColor(color){
    var sidebar = <HTMLElement>document.querySelector('.sidebar');

    this.sidebarColor = color;
    if(sidebar != undefined){
        sidebar.setAttribute('data-color',color);
    }
  }
  changeSidebarActiveColor(color){
    var sidebar = <HTMLElement>document.querySelector('.sidebar');
    this.sidebarActiveColor = color;
    if(sidebar != undefined){
        sidebar.setAttribute('data-active-color',color);
    }
  }
  ngOnInit(){
    this.initConfig();
  }

  
  private initConfig(): void {
    this.payPalConfig = {
        currency: 'EUR',
        clientId: 'AaFe0mpj1GqZmkBuqvPlwCPK5tJ5zywzmzydQB5Mr-tg-wfMQfcjXCweCtNKiacG32y-KMg4W4Z-IVEz',
        createOrderOnClient: (data) => < ICreateOrderRequest > {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'EUR',
                    value: '5.00',
                    breakdown: {
                        item_total: {
                            currency_code: 'EUR',
                            value: '5.00'
                        }
                    }
                },
                items: [{
                    name: 'Enterprise Subscription',
                    quantity: '1',
                    category: 'DIGITAL_GOODS',
                    unit_amount: {
                        currency_code: 'EUR',
                        value: '5.00',
                    },
                }]
            }]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical'
        },
        onApprove: (data, actions) => {
            console.log('onApprove - transaction was approved, but not authorized', data, actions);
            actions.order.get().then(details => {
                console.log('onApprove - you can get full order details inside onApprove: ', details);
            });

        },
        onClientAuthorization: (data) => {
            console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
            // this.showSuccess = true;
        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);
            // this.showCancel = true;

        },
        onError: err => {
            console.log('OnError', err);
            // this.showError = true;
        },
        onClick: (data, actions) => {
            console.log('onClick', data, actions);
            // this.resetStatus();
        }
    };
}
}
