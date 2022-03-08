import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-corners',
  templateUrl: './corners.component.html',
  styleUrls: ['./corners.component.scss']
})
export class CornersComponent implements OnInit {

  constructor() {
  }
  DI = {};
  promedioCorners: number;

  ngOnInit(): void {
  }

  calcularCorners(value) {
    if (value.pcpl === null || value.pcfl === null || value.pcel === null || value.pcpv === null || value.pcfv === null || value.pcev == null) {
      Swal.fire({
        title: 'Error!',
        text: 'Para realizar el cálculo rellene todos los campos',
        icon: 'error',
        confirmButtonText: 'Cerrar'
      })    } else {
      let suma1 = (value.pcpl + value.pcpv) / 2;
      let suma2 = (value.pcfl + value.pcev);
      this.promedioCorners = (suma1 + suma2) / 2;
      console.log("promedioCorners: ", this.promedioCorners)
    }
  }

}
