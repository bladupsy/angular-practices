import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <div>
        <h1>{{ titulo }}</h1>
        <h3>
            La base es: <strong>{{ base }}</strong>
        </h3>
        <button (click)="numero = numero + 1">+ 1</button>
        <span>{{ numero }}</span>
        <button (click)="numero = numero - 1">- 1</button>
    </div>
    <div>
        <button (click)="sumar()">+ 1</button>
        <span>{{ numero }}</span>
        <button (click)="restar()">- 1</button>
    </div>
    <div>
        <button (click)="acumular(base)">{{ base }}</button>
        <span>{{ numeros }}</span>
        <button (click)="acumular(-base)">{{ base }}</button>
    </div>
    `,
})
export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;
    numeros: number = 10;

    sumar() { this.numero += 1 }

    restar() { this.numero -= 1 }

    acumular(valor: number) {
        this.numeros += valor
    }

}
