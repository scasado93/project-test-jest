import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class SampleService {
 getData(): string {
   return "Datos del servicio";
 }
}
