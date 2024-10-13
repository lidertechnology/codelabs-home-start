import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import {DetailComponent} from "./detail/detail.component";

const routeConfig: Routes = [
    {
        path:'',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'detail',
        component: DetailComponent,
        title: 'Detail Page'
    },
    {
        path: 'detail/:id',
        component: DetailComponent,
        title: 'Detail Page'
    }

]

export default routeConfig;