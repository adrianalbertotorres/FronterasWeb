import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { PaginasWebComponent } from './paginas-web/paginas-web.component';


const routes: Routes = [
{path:'contacto',component:ContactoComponent},
{path:'inicio',component:InicioComponent},
{path:'paginas-web',component:PaginasWebComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
