import { Routes } from '@angular/router';
import { HeroComponent } from './heroes/hero/hero.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: HeroesComponent },
  { path: 'hero/:id', component: HeroComponent },
];
