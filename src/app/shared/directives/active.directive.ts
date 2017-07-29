import { Directive, HostBinding, Input } from '@angular/core';

@Directive( {
    selector: '[appActive]'
} )
export class ActiveDirective {

    @HostBinding( 'style.backgroundColor' ) backgroundColor: string;
    @HostBinding( 'style.color' ) color: string;
    @Input( 'appActive' ) set isActif( condition ) { // evalue ceci [appActive]="index === actifCocktail"
        if ( condition ) {
            this.backgroundColor = '#3498db';
            this.color = 'white';
        } else {
            this.backgroundColor = 'transparent';
            this.color = 'black';
        }
    }
    constructor() { }

    //    @Input( 'appActive' ) isActif: boolean;
    //    ngOnChanges(): void {
    //        if ( this.isActif ) {
    //            this.backgroundColor = '#3498db';
    //            this.color = 'white';
    //        } else {
    //            this.backgroundColor = 'transparent';
    //            this.color = 'black';
    //        }
    //    }
}
