import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "",
		loadChildren: () => import("./modules/home/home.module").then((m) => m.HomeModule),
	},
	{
		path: "admin",
		loadChildren: () => import("./modules/admin/admin.module").then((m) => m.AdminModule),
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			// preload all modules; optionally we could
			// implement a custom preloading strategy for just some
			// of the modules (PRs welcome 😉)
			preloadingStrategy: PreloadAllModules,
			relativeLinkResolution: "legacy",
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
