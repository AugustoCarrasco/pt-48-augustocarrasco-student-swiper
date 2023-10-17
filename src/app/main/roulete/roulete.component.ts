import { Component, AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-roulete',
  templateUrl: './roulete.component.html',
  styleUrls: ['./roulete.component.css']
})
export class RouleteComponent implements AfterViewInit {

  constructor(private dataService: DataService) { }

  winnerSelected: string = this.dataService.getRandomWinner();
  chipVisibility: boolean = false;

  listaParticipantes = this.dataService.selectedParticipants;

  ngAfterViewInit(): void {
    console.log(this.winnerSelected);
    setTimeout(() => {
      this.chipVisibility = !this.chipVisibility;
    }, 14000);
  };
}
