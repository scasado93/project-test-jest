import { Component, OnInit } from '@angular/core';

import { SampleService } from '../../../core/services/sample-service/sample.service';

@Component({
  selector: 'app-home',
  template: `
    <div>
      <h1>{{ title }}</h1>
      <button class="btn btn--primary" (click)="increment()">
        Incrementar
      </button>
      <p>Contador: {{ count }}</p>
      <button class="btn btn--secondary" (click)="toggleVisibility()">
        Cambiar visibilidad
      </button>
      <p *ngIf="isVisible">Visible</p>
      <div>Datos: {{ data }}</div>
    </div>
  `,
})
export class HomeComponent implements OnInit {
  title = 'Home component';
  count = 0;
  isVisible = false;
  data = '';

  constructor(private sampleService: SampleService) {}

  ngOnInit(): void {
    this.data = this.sampleService.getData();
  }

  increment(): void {
    this.count++;
  }

  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }
}
