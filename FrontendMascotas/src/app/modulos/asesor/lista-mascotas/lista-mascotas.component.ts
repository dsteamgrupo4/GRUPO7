import { Component, OnInit } from '@angular/core';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';

@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css']
})
export class ListaMascotasComponent implements OnInit {

  listadoRegistro: ModeloMascota[]=[];

  constructor(private mascota: MascotaService) { }

  ngOnInit(): void {
    this.ObtenerListadoMascotas();
  } 

  ObtenerListadoMascotas(){
    this.mascota.ObtenerRegistros().subscribe((datos: ModeloMascota[])=>{
      this.listadoRegistro = datos;     
    })

  }
  }
