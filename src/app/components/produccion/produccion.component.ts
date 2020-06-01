import { Component, OnInit, Input } from '@angular/core';
import { Produccion } from 'src/app/models/produccion.model';

@Component({
  selector: 'app-produccion',
  templateUrl: './produccion.component.html'
})
export class ProduccionComponent implements OnInit {
  @Input() produccion: Produccion;
  constructor() { }
  ngOnInit() { }
}
