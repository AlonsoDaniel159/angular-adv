import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  ngOnInit() {

    this.getUsuarios()
      .then(usuarios => {
        // console.log(usuarios);
      })

    // const promesa = new Promise((resolve, reject) => {

    //   if (false) {
    //     resolve('Hola Mundo');
    //   } else {
    //     reject('Algo salio mal');
    //   }


    // });

    // promesa
    //   .then((msg) => {
    //     console.log('Hey termine', msg);
    //   })
    //   .catch(e =>
    //     console.log(e)
    //   )

    // console.log('Fin del init');

  }

  getUsuarios() {

    return new Promise((resolve, reject) => {

      fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(body => resolve(body.data))
        .catch(err => reject(err))

    });
  }

}
