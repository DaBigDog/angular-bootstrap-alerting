import { Component, Output, Input, EventEmitter } from '@angular/core';

import { Alert } from './alert'
import { Guid } from './Guid'


@Component({
    selector: 'alerter',
    template: 
    '<div class="alert-banner" (transitionend)="transitionEnd($event)" [style.opacity]="opacity" [style.transition]="transition">' +
    '<div class="alert alert-dismissible a-marg" role="alert"  [ngClass]="alert.BannerClass">' +
    '<button type="button" class="close" data-dismiss="alert" aria-label="Close" (click)="sayGoodbye()"><span aria-hidden="true">&times;</span></button>' +
    '<strong>{{alert.Title}}</strong>' + '<br>'+
    '{{alert.Message}}' +
    '</div>' +
    '</div>'
})

export class AlerterComponent {


    @Output() onRemove = new EventEmitter<Alert>();
    @Input() alert: Alert;

    private timer: any;

    private opacity: string = "";
    private transition: string = "";

    constructor() {
        
    }


    async ngOnInit() {
        this.initiateTimedDestroy();
    }


    private initiateTimedDestroy(): void {
        this.timer = setTimeout(() => {
            this.fadeOut();
        }, this.alert.DisplayLengthSeconds * 1000);

        new Promise(resolve => this.timer);
    }

    // adds css class to fade out element
    private fadeOut(): void {
        this.opacity = "0";
        if (undefined !== this.alert.FadeoutLengthSeconds) {
            this.transition = "opacity " + this.alert.FadeoutLengthSeconds + "s linear";
        }
    }

    // immediately hides element
    private sayGoodbye(): void {
        this.opacity = "0";
        this.transitionEnd(null);
    }

    // fires when css transition ends... and cleans up
    private transitionEnd(e: Event) {
        this.onRemove.next(this.alert);
        clearTimeout(this.timer);
    }
}
