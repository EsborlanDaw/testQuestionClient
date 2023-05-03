import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environments';
import { Observable } from 'rxjs';
import { jugarPreguntaInterface, jugarRespuestaInterfaceMostrar} from '../model/jugarInterface';

@Injectable({
  providedIn: 'root'
})
export class JugarService {

  private entityURL = 'jugar'
  url: string = ""

  constructor(private oHttp: HttpClient) {
    this.url = `${environment.baseURL}${this.entityURL}`;
  }

  getPregunta() :Observable<jugarPreguntaInterface> {
    return this.oHttp.get<jugarPreguntaInterface>(this.url+ '/pregunta' );
  }

  getRespuestas(id:number):Observable<jugarRespuestaInterfaceMostrar>{
    return this.oHttp.get<jugarRespuestaInterfaceMostrar>(this.url + '/respuestas/' + id);
  }

  comprobarResultado(id_persona:number, id_respuesta:number) : Observable<number>{
    return this.oHttp.get<number>(this.url  + '/' + id_persona + '/' + id_respuesta)
  }

}
