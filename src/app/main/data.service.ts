import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  selectedParticipants: Array<string> = [];
  winnerSelected: string = '';
  customizedParticipants: Array<string> = [];

  getParticipants(): Array<string> {
    return (this.customizedParticipants.length < 2)
      ? ['Start!', 'Augusto', 'Husseim', 'Bart', 'María', 'Marta', 'Juan', 'Eduardo','Emmanuel','Anderson','Adrian','Paul','Guido','Agustín', 'Nilson']
      : this.customizedParticipants;
  }
  setCustomizedParticipants(array: Array<string>): void {
    this.customizedParticipants = array;
    this.customizedParticipants.unshift('Start!');
  }
  getFiltered(name: string): void {
    this.selectedParticipants.push(name);
  }

  getRandomWinner(): string {
    this.winnerSelected =
      this.selectedParticipants[
        Math.floor(Math.random() * this.selectedParticipants.length)
      ];
    return this.winnerSelected;
  }
}
