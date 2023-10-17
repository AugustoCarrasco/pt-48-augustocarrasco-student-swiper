import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.css']
})
export class CustomizeComponent {

  constructor( 
      private router: Router,
      private dataService: DataService,
    ){}
  
  formLines: Array<number> = [1, 2];

  addFormEntrie(): void {
    if (this.formLines.length < 16) {
      this.formLines.push(this.formLines[(this.formLines.length - 1)] + 1);
      // console.log(this.formLines)
    } else alert('Reached max players.')
  }

  onSubmit(form: NgForm): void {
    // console.log(form.value)
    const participantsObject: object = form.value;
    const participantsArray: Array<string> = getArrayFromObject(participantsObject);
    console.log(participantsArray);
    this.dataService.setCustomizedParticipants(participantsArray);
    this.router.navigate(['/cards']);
  };
}

function getArrayFromObject(participantsObject: object): string[] {
  let aux: string[] = [];
  Object.entries(participantsObject).map(e => {if (e[1] != '') { aux.push(e[1] as any as string) }} )
  return aux;
}

