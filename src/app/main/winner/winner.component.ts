import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent {

  constructor(private dataService: DataService) { }

  selectedParticipants: Array<string> = this.dataService.selectedParticipants;

  winnerSelected: string = this.dataService.winnerSelected;

  startOver():void {
    this.dataService.selectedParticipants = [];
  };
}
