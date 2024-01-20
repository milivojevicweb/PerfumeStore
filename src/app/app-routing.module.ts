import { ProductsComponent } from './products/products.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OneProductComponent } from './one-product/one-product.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'kontakt', component:ContactComponent},
  {path: 'parfemi', component:ProductsComponent},
  {path : "parfemi/:id",component : OneProductComponent
  },
  {path:'not-found',component:PageNotFoundComponent},
  {path: '**', redirectTo:'/not-found'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
