import { Component, OnInit } from '@angular/core';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';

@Component({
  selector: 'app-listar-mascota',
  templateUrl: './listar-mascota.component.html',
  styleUrls: ['./listar-mascota.component.css']
})
export class ListarMascotaComponent implements OnInit {
  listadoRegistro: ModeloMascota[]=[];

  constructor(private mascota: MascotaService) { }

  ngOnInit(): void {
    this.ObtenerListadoMascotas();
  } 

  ObtenerListadoMascotas(){
    this.mascota.ObtenerMascotasPorUsuario().subscribe((datos: ModeloMascota[])=>{
      this.listadoRegistro = datos;     
    })

  }
}
