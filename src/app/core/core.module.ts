import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ValidateInputComponent } from "./components/validate-input/validate-input.component";

@NgModule({
	declarations: [HeaderComponent, FooterComponent, ValidateInputComponent],
	imports: [CommonModule],
	exports: [HeaderComponent, FooterComponent, ValidateInputComponent],
})
export class CoreModule {}
