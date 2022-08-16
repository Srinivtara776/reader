import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent} from "./home.component";
import { HomeRouterModule } from "./home.route.module";

@NgModule({
    imports:[HomeRouterModule],
    declarations:[
        HomeComponent
    ]
})
export class HomeModule {}