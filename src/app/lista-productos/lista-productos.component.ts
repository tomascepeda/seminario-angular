import { Component, OnInit } from '@angular/core';
import { Producto } from './Producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos: Producto[] = [
    {
      tipo: "Aceite de motor",
      nombre: "Elaion F30",
      precio: 1450,
      stock: 10,
      cantidad: 0,
      oferta: false,
    },
    {
      tipo: "Refrigerante",
      nombre: "TIR",
      precio: 800,
      stock: 3,
      cantidad: 0,
      oferta: false,
    },
    {
      tipo: "Refrigerante",
      nombre: "Quartz red",
      precio: 450,
      stock: 0,
      cantidad: 0,
      oferta: false,
    },
    {
      tipo: "Aceite de motor",
      nombre: "Helix hx8",
      precio: 3450,
      stock: 2,
      cantidad: 0,
      oferta: false,
    },
    {
      tipo: "Luz halogena",
      nombre: "general electric h7",
      precio: 100,
      stock: 50,
      cantidad: 0,
      oferta: true,
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  restar(producto: Producto) {
    if (producto.cantidad > 0)
      producto.cantidad--;
  }

  aumentar(producto: Producto) {
    if (producto.cantidad < producto.stock)
      producto.cantidad++;
  }

}
