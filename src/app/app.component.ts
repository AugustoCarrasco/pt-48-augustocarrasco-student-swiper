import { Component } from '@angular/core';
import * as d3 from 'd3';
import { AfterViewInit, OnInit, OnChanges } from '@angular/core';
import { register } from 'swiper/element/bundle'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {
    register();
  }
  title = 'RandomCrazyStudentSelector';
  data = ['One', 'Two', 'Three', 'Four', 'Five']

  ngOnInit(): void {
    this.drawChips();
  }

  private drawChips():void {
    const container = d3
    .select('.mdc-evolution-chip-set__chips div')
    .selectAll('.chip')
    .data(this.data)
    .enter()
    .append('mat-chip-option')
    .attr('role', 'listitem')
    .attr('class', 'chip')
    .text(d => d);

    const chips = container 
    d3

  }
  
   
}
