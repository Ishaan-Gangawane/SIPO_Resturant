import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { About } from '../about/about';
import { Menu } from '../menu/menu';
import { OurServices } from '../our-services/our-services';
import { MeetOurChef } from '../meet-our-chef/meet-our-chef';
@Component({
  selector: 'app-home',
  imports: [MatIconModule , MatDividerModule,MatButtonModule,About,Menu,OurServices,MeetOurChef],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
