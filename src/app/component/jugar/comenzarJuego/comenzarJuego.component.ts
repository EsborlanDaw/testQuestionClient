import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jugarPreguntaInterface, jugarRespuestaInterfaceMostrar, resultadoInterfaceEnviar, resultadoInterfaceForm } from 'src/app/model/jugarInterface';
import { JugarService } from 'src/app/service/jugar.service';
declare let bootstrap: any;

@Component({
  selector: 'app-comenzarJuego',
  templateUrl: './comenzarJuego.component.html',
  styleUrls: ['./comenzarJuego.component.css']
})
export class ComenzarJuegoComponent implements OnInit {

  idPregunta: number = 0;
  idRespuesta: number = 0;
  resultado : number = 0;
  respuestaCorrecta : any;
  jugarPreguntaInterface: jugarPreguntaInterface = null;
  jugarRespuestaInterfaceMostrar: jugarRespuestaInterfaceMostrar = null;
  resultadoInterfaceForm: resultadoInterfaceForm = null;
  resultadoInterfaceEnviar: resultadoInterfaceEnviar = null;

  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";


  constructor(
    private jugarService: JugarService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPregunta();
  }

  getPregunta() {
    this.jugarService.getPregunta().subscribe({
      next: (data: jugarPreguntaInterface) => {
        this.jugarPreguntaInterface = data;
        this.idPregunta = data.id;
        console.log(data);
        this.getRespuestas(this.idPregunta);
      }
    })
  }

  getRespuestas(id: number) {
    this.jugarService.getRespuestas(id).subscribe({
      next: (data: jugarRespuestaInterfaceMostrar) => {
        this.jugarRespuestaInterfaceMostrar = data;
      }
    })
  }

  comprobarRespuesta(id_respuesta:number){
    this.jugarService.comprobarResultado(this.idPregunta,id_respuesta).subscribe({
      next: (data: number) => {
        this.resultado = data;
        if(this.resultado == 0){
          this.resultadoFallado();
        } else{
          this.resultadoAcertado();
        }
      }
    })
  }

  resultadoAcertado(){
    this.modalTitle = "CORRECTO";
    this.modalContent = "Ha seleccionado la respuesta correcta";
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
      keyboard: false
    })
    var myModalEl = document.getElementById(this.mimodal);
    this.myModal.show()
  }

  resultadoFallado(){
    this.respuestaCorrecta = this.jugarRespuestaInterfaceMostrar.filter(x => x.pregunta.id == this.idPregunta)[0];
    this.modalTitle = "ERROR";
    this.modalContent = "La respuesta correcta era " + this.respuestaCorrecta.respuesta;
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
      keyboard: false
    })
    var myModalEl = document.getElementById(this.mimodal);
    this.myModal.show()
  }


}
