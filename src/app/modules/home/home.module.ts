import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./pages/home/home.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserSvgComponent } from "./components/svgs/browser-svg/browser-svg.component";
import { NotebookSvgComponent } from "./components/svgs/notebook-svg/notebook-svg.component";
import { PhoneSvgComponent } from "./components/svgs/phone-svg/phone-svg.component";
import { InquireWebComponent } from "./components/inquireWeb/inquireWeb.component";
import { FormComponent } from "./components/inquireWeb-steps/form/form.component";
import { PackagesComponent } from "./components/inquireWeb-steps/packages/packages.component";
import { SentComponent } from "./components/inquireWeb-steps/sent/sent.component";
import { CoreModule } from "src/app/core/core.module";

@NgModule({
	declarations: [HomeComponent, InquireWebComponent, FormComponent, PackagesComponent, SentComponent, BrowserSvgComponent, NotebookSvgComponent, PhoneSvgComponent],
	imports: [HomeRoutingModule, CoreModule, FormsModule, ReactiveFormsModule, CommonModule],
	exports: [HomeComponent],
})
export class HomeModule {}
