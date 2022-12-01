import { NgModule, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';  


import { RouterModule, Routes } from '@angular/router';  
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

const appRoutes : Routes = [
    { path: '', component: PortafolioComponent },
    { path: 'about', component: AboutComponent }, 
    { path: 'item', component: ItemComponent }, 
    { path: '**', pathMatch: 'full', redirectTo: '' }
];   

@NgModule({
    imports: [
        RouterModule.forRoot( appRoutes )
    ],
    exports : [
        RouterModule
    ]
})
export class AppRoutingModule {

}