import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
    {
        path: "auth",
        loadChildren:
            "./authentication/authentication.module#AuthenticationModule"
    },
    {
        path: "",
        loadChildren: "./dashboard/dashboard.module#DashboardModule"
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {}
