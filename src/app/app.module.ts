import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavigatorModule } from './navigator/navigator.module';
import { ViewModule } from './view/view.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FontAwesomeModule,
		NavigatorModule,
		ViewModule,
		FooterModule,
	],
	providers: [],
	bootstrap: [
		AppComponent,
	],
})
export class AppModule { }
