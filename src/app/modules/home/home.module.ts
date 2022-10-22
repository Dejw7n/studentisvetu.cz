import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./pages/home/home.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InquireWebModule } from "./modules/inquireWeb/inquireWeb.module";

@NgModule({
	declarations: [HomeComponent],
	imports: [HomeRoutingModule, InquireWebModule, CommonModule],
	exports: [HomeComponent],
})
export class HomeModule {}
