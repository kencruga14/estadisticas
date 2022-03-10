import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent implements OnInit {

  DI = {};
  promedioTarjetas: number;

  ngOnInit(): void {
  }

  calcularTarjetas(value) {
    console.log("valores: ", value);
    if (value.tfl === null || value.tel === null || value.tfv === null || value.tev === null || value.paa === null || value.pra == null) {
      Swal.fire({
        title: 'Error!',
        text: 'Para realizar el cálculo rellene todos los campos',
        icon: 'error',
        confirmButtonText: 'Cerrar'
      })
    } else {
      let sumaLocal = value.tfl + value.tel;
      let sumaVisita = value.tfv + value.tev;
      let promediotarjetasLocalVisita = (sumaLocal + sumaVisita) / 2;
      this.promedioTarjetas = (promediotarjetasLocalVisita + value.paa) / 2;
    }
  }

}
