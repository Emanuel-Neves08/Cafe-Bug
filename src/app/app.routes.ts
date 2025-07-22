import { Routes } from '@angular/router';

import { ContatoComponent } from './pages/contato/contato.component';
import { ListaLivrosComponent } from './pages/lista-livros/lista-livros.component';
import { SobreComponent } from './pages/sobre/sobre.component';

export const routes: Routes = [
  {
    path: 'lista-livros',
    component: ListaLivrosComponent,
    title: 'Busque um livro - Café&Bug'
  },
  {
    path: 'sobre',
    component: SobreComponent,
    title: 'Mais informações - Café&Bug'
  },
  {
    path: 'contato',
    component: ContatoComponent,
    title: 'Entre em contato - Café&Bug'
  },
  {
    path: '',
    redirectTo: 'lista-livros',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ListaLivrosComponent
  }
];
