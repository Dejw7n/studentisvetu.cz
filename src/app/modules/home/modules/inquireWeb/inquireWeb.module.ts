import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InquireWebComponent } from "./components/inquireWeb/inquireWeb.component";
import { PackagesComponent } from "./components/steps/packages/packages.component";
import { DetailsComponent } from './components/steps/details/details.component';

@NgModule({
	declarations: [InquireWebComponent, PackagesComponent, DetailsComponent],
	imports: [CommonModule],
	exports: [InquireWebComponent],
})
export class InquireWebModule {}
