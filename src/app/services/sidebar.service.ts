import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Main', url: '/' },
        { titulo: 'ProgressBar', url: '/dashboard/progress' },
        { titulo: 'Gráfica', url: '/dashboard/grafica1' },
        { titulo: 'Promesas', url: '/dashboard/promesas' },
        { titulo: 'RxJS', url: '/dashboard/rxjs' }
      ]
    }
  ]

  constructor() { }
}
