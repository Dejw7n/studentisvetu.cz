import { HomeRoutingModule } from "./home-routing.module";
import { OrderComponent } from "./components/order/order.component";
import { HomeComponent } from "./pages/home/home.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
	declarations: [HomeComponent, OrderComponent],
	imports: [HomeRoutingModule, CommonModule],
	exports: [HomeComponent],
})
export class HomeModule {}
