import { HttpHeaders } from "@angular/common/http";


export const environment = {
  production: true,
  baseURL: "erratic-gun-production.up.railway.app/",
  headers: { 'content-type': 'application/json' },
};
export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8'
  }),
  withCredentials: true
}