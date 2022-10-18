import { FooterComponent } from "./components/footer/footer.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
	declarations: [NavbarComponent, FooterComponent],
	imports: [CommonModule],
	exports: [NavbarComponent, FooterComponent],
})
export class CoreModule {}
