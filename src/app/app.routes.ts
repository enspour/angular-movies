import { Routes } from '@angular/router';

import { MainLayoutComponent } from './domain/components/layouts/main-layout/main-layout.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { WatchListPageComponent } from './pages/watch-list-page/watch-list-page.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'search/:text', component: SearchPageComponent },
      { path: 'movie/:id', component: MoviePageComponent },
      { path: 'watch-list', component: WatchListPageComponent },
      { path: '**', component: NotFoundPageComponent },
    ],
  },
];
