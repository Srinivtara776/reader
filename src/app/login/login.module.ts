import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LoginRouteModule } from "./login.route.module";
import { LoginComponent } from "./login.component";
@NgModule({
    imports:[
        LoginRouteModule,
        FormsModule
    ],
    declarations:[
        LoginComponent
    ]
})
export class LoginModule{

}