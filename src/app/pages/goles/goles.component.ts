import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goles',
  templateUrl: './goles.component.html',
  styleUrls: ['./goles.component.scss']
})
export class GolesComponent implements OnInit {

  DI = {};
  promedioOver: string;

  ngOnInit(): void {
  }

  calcularOver(value) {
    console.log("valores: ", value);
    if (value.pal === null || value.prl === null || value.pav === null || value.prv === null || value.pels === null || value.pevs === null) {
      Swal.fire({
        title: 'Error!',
        text: 'Para realizar el cálculo rellene todos los campos',
        icon: 'error',
        confirmButtonText: 'Cerrar'
      })
    } else {
      let pgel = value.pels;
      let pgev = value.pevs;
      let fae1 = (value.pal / value.pels);
      let fde2 = (value.prv / pgev);
      let geel = (fae1 * fde2 * pgel);
      let fae2 = (value.pav / pgev);
      let fde1 = (value.prl / pgev);
      let geev = (fae2 * fde1 * pgev);
      let gep = (geel + geev);

      this.promedioOver = gep >= 2.5 ? " Más de 2.5 Goles" : "Menos de 2.5 Goles"

      Swal.fire({
        title: 'Recomendación Línea:',
        text:  this.promedioOver,
        icon: 'success',
        confirmButtonText: 'Cerrar'
      })

    }
  }

}
