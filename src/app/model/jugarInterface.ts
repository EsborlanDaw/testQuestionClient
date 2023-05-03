import { FormControl } from "@angular/forms"

export interface jugarRespuestaInterface {
    id: number
    respuesta: string
    pregunta: jugarPreguntaInterface
}

export interface jugarRespuestaInterfaceMostrar extends Array<jugarRespuestaInterface>{}

export interface jugarPreguntaInterface{
    id: number
    pregunta: string
}

export interface resultadoInterfaceForm {

    pregunta: FormControl<number>;
    respuesta: FormControl<number>;

}

export interface resultadoInterfaceEnviar {
    pregunta: number;
    respuesta: number;

}
