import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomizeComponent } from './main/customize/customize.component';
import { CardsComponent } from './main/cards/cards.component';
import { ChipsComponent } from './main/chips/chips.component';
import { RouleteComponent } from './main/roulete/roulete.component';
import { WinnerComponent } from './main/winner/winner.component';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatCommonModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {
  CdkMenu,
  CdkMenuItem,
  CdkMenuItemRadio,
  CdkMenuGroup,
  CdkMenuItemCheckbox,
  CdkMenuTrigger,
} from '@angular/cdk/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperDirective } from './main/Swiper Directives/swiper.directives';


@NgModule({
  declarations: [
    CustomizeComponent,
    CardsComponent,
    ChipsComponent,
    RouleteComponent,
    WinnerComponent,
    SwiperDirective
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatCommonModule, CdkMenu,
    CdkMenuItem,
    CdkMenuItemRadio,
    CdkMenuGroup,
    CdkMenuItemCheckbox,
    MatCardModule,
    CdkMenuTrigger,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    RouterModule.forChild([
      { path: 'customize', component: CustomizeComponent },
      { path: 'cards', component: CardsComponent },
      { path: 'roulette', component: RouleteComponent },
      { path: 'winner', component: WinnerComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainModule { }
