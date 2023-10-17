import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;

  constructor(private dataService: DataService) { }

  listaParticipantes = this.dataService.getParticipants();


  ngOnInit(): void {

  }
  index = 0;

  // Swiper
  swiperConfig: SwiperOptions = {
    spaceBetween: 10,
    pagination: true,
  }

  ngAfterViewInit() {
    this.swiper.nativeElement.swiper.activeIndex = this.index;
    // console.log(this.listaParticipantes)
  }

  slideChange(swiper: any) {
    let indexSelected = swiper.detail[0].activeIndex + 1;
    this.dataService.getFiltered(this.listaParticipantes[indexSelected]);
    // this.listaParticipantes.splice(indexSelected, 1);    
      //  --------------------Pendiente resolver visualización
    // console.log(this.swiper.nativeElement)
    // console.log(swiper.detail[0].activeIndex);
    // console.log(this.dataService.selectedParticipants);
  }

}
