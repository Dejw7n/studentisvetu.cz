import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InquireWebComponent } from "./components/inquireWeb/inquireWeb.component";
import { PackagesComponent } from "./components/steps/packages/packages.component";
import { DetailsComponent } from './components/steps/details/details.component';
import { SummaryComponent } from './components/steps/summary/summary.component';

@NgModule({
	declarations: [InquireWebComponent, PackagesComponent, DetailsComponent, SummaryComponent],
	imports: [CommonModule],
	exports: [InquireWebComponent],
})
export class InquireWebModule {}
