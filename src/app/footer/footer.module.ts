import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterContainerComponent } from './footer-container/footer-container.component';

@NgModule({
	declarations: [
		FooterContainerComponent,
	],
	imports: [
		CommonModule
	],
	exports: [
		FooterContainerComponent,
	],
})
export class FooterModule { }
