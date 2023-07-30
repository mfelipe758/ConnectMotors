import { RouterModule, Routes } from "@angular/router";
import { SearchCarrosComponent } from "./search-carros/search-carros.component";
import { PageNotFoundComponent } from "../shared/components/page-not-found/page-not-found.component";
import { NgModule } from "@angular/core";
import { ReserveComponent } from "./reserve/reserve.component";

const routes: Routes = [
    {path: 'search', component: SearchCarrosComponent},
    {path: 'reserve', component: ReserveComponent},
    {path: '**', component: PageNotFoundComponent},
];

@NgModule   ({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule] 
})    
export class CarrosRoutingModule{

}