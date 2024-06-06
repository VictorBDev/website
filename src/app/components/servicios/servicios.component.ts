// src/app/components/servicios/servicios.component.ts
import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';

interface Servicio {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  servicios: Servicio[] = [];

  constructor(private serviciosService: ServiciosService) { }

  ngOnInit(): void {
    this.servicios = this.serviciosService.getServicios();
  }
}
