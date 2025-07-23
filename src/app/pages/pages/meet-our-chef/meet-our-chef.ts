import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-meet-our-chef',
  imports: [CommonModule, MatIconModule],
  templateUrl: './meet-our-chef.html',
  styleUrl: './meet-our-chef.scss'
})
export class MeetOurChef {
  Math = Math;


  chefs = [
    {
      name: 'Andy Warhol',
      title: 'Head of Chef',
      stars: 5,
      image: '/pexels-miquel-ferran-gomez-figueroa-2172703-3814446.jpg',
    },
    {
      name: 'Lusia Manuel',
      title: 'Assistant Chef',
      stars: 4,
      image: '/pexels-vadimmarkin-2102934.jpg',
    },
    {
      name: 'Michael Blair',
      title: 'Intern Chef',
      stars: 5,
      image: '/smiling-young-asian-chef-kitchen-interior.jpg',
    },
    {
      name: 'Tereza Stiles',
      title: 'Assistant Chef',
      stars: 4.5,
      image: '/rc-cf-FMh5o5m5N9E-unsplash.jpg',
    },
  ];

}
