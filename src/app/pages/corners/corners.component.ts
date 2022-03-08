import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    let suma1 = (value.pcpl + value.pcpv) / 2;
    let suma2 = (value.pcfl + value.pcev);
    this.promedioCorners = (suma1 + suma2) / 2;
    console.log("promedioCorners: ", this.promedioCorners)


  }

}
