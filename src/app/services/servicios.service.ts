// src/app/services/servicios.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private servicios = [
    {
      icon: 'briefcase', // Puedes usar iconos de FontAwesome u otro conjunto de iconos
      title: 'Ventas',
      description: 'Venta de los mejores repuestos de partes de motor, cajas, transmisiones, piñones, coronas y trenes fijos de las marcas de Korea y Japon. A los mejores precios del mercado.'
    },
    {
      icon: 'tools',
      title: 'Asesoria',
      description: 'Le brindamos una asesoría personalizada acerca de nuestros productos, a elegir el mejor repuesto para su movilidad.'
    },
    {
      icon: 'truck',
      title: 'Delivery',
      description: 'Compras sin salir de casa, realizamos entregas a domicilio en el menor tiempo posible.'
    },
    {
      icon: 'tags',
      title: 'Productos',
      description: 'Contamos con las mejores marcas y calidad de productos del mercado.'
    }
  ];

  constructor() { }

  getServicios() {
    return this.servicios;
  }
}
