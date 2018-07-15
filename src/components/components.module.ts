import { NgModule } from '@angular/core';

import { ModalComponent } from './modal/modal';
import { ModalTotalComponent } from './modal-total/modal-total';
@NgModule({
	declarations: [
    	ModalComponent,
    	ModalTotalComponent
	],
	imports: [],
	exports: [
	    ModalComponent,
    	ModalTotalComponent
	]
})
export class ComponentsModule {}
