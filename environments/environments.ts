import { HttpHeaders } from "@angular/common/http";


export const environment = {
  production: false,
  baseURL: "http://localhost:8082/",
  headers: { 'content-type': 'application/json' },
};
export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8'
  }),
  withCredentials: true
}