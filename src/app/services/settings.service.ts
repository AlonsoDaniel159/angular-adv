import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() {

    const theme = localStorage.getItem('theme') || 'red-dark';
    const url = `./assets/css/colors/${theme}.css`;

    this.linkTheme!.setAttribute('href', url);
  }

  changeTheme(theme: string) {

    const url = `./assets/css/colors/${theme}.css`;

    //Asignar href
    this.linkTheme!.setAttribute('href', url);
    localStorage.setItem('theme', theme);

    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const links = document.querySelectorAll('.selector');

    links.forEach(e => {

      e.classList.remove('working');
      const btnTheme = e.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        e.classList.add('working');
      }
    })
  }
}
