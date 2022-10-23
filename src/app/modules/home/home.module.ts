import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./pages/home/home.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InquireWebModule } from "./modules/inquireWeb/inquireWeb.module";
import { DesktopSvgComponent } from './components/desktop-svg/desktop-svg.component';
import { MobileSvgComponent } from './components/mobile-svg/mobile-svg.component';
import { BrowserSvgComponent } from './components/browser-svg/browser-svg.component';

@NgModule({
	declarations: [HomeComponent, DesktopSvgComponent, MobileSvgComponent, BrowserSvgComponent],
	imports: [HomeRoutingModule, InquireWebModule, CommonModule],
	exports: [HomeComponent],
})
export class HomeModule {}
