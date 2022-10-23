import { CoreModule } from "./../../../../core/core.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InquireWebComponent } from "./components/inquireWeb/inquireWeb.component";
import { SentComponent } from "./components/steps/sent/sent.component";
import { FormComponent } from "./components/steps/form/form.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
	declarations: [InquireWebComponent, SentComponent, FormComponent],
	imports: [CoreModule, CommonModule, FormsModule, ReactiveFormsModule],
	exports: [InquireWebComponent],
})
export class InquireWebModule {}
