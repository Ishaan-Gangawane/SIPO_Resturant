import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-menu',
  imports: [MatCardModule ,CommonModule,MatIconModule,MatButtonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})

 
export class Menu {
  menuItems = [
    {
      image: '/mae-mu-H5Hj8QV2Tx4-unsplash.jpg',
      title: 'Spicy Chicken Ramen',
      description: 'A fusion of flavor, heat, and comfort.',
      category: 'Main Course',
      available: true,
      weight: '350 g',
      vegetarian: false,
      rating: 4.5,
      price: 8.99,
    },
    {
      image: '  /peter-dawn-3X7SVgAxKU8-unsplash.jpg',
      title: 'Veggie Dumplings',
      description: 'Handmade, steamed, and served with love.',
      category: 'Appetizers',
      available: true,
      weight: '180 g',
      vegetarian: true,
      rating: 4.8,
      price: 5.50,
    },
    {
      image: '/nisha-ramesh-Q5mPPGld5Zk-unsplash.jpg',
      title: 'Sweet Chili Noodles',
      description: 'Sweet, spicy, and perfectly saucy.',
      category: 'Noodles',
      available: true,
      weight: '300 g',
      vegetarian: true,
      rating: 4.3,
      price: 6.75,
    },
    {
      image: '/george-zheng-0Kbjfwunink-unsplash.jpg',
      title: 'Sweet Chili Chicken',
      description: 'Sweet, spicy, and perfectly saucy.',
      category: 'Noodles',
      available: true,
      weight: '300 g',
      vegetarian: true,
      rating: 4.3,
      price: 6.75,
    }
  ];

  getStars(rating: number): string[] {
    const stars = [];
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    for (let i = 0; i < full; i++) stars.push('star');
    if (half) stars.push('star_half');
    while (stars.length < 5) stars.push('star_border');
    return stars;
  }
  
  
}
