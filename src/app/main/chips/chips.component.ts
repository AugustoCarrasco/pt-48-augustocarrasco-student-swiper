import { Component,Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent {

  constructor(private dataService: DataService){}
  
  @Input() removeInput: boolean = true;
  toggleShowing: boolean = true;

  listaParticipantes: Array<string> = this.dataService.selectedParticipants;

  removeChip(nombre: string): void {
    const index = this.listaParticipantes.indexOf(nombre);

    if (index >= 0) {
      this.listaParticipantes.splice(index, 1);
      this.dataService.selectedParticipants.splice(index,1);
      // console.log(this.listaParticipantes);
      // console.log(this.dataService.selectedParticipants);
    }
  }

}
