import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CurrencyConverterPipe } from './currency-converter-pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, CurrencyConverterPipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css'
})
export class Pipes {
  title = "This is the Title for Pipes";

  date = new Date()

  amount = 10;
}
