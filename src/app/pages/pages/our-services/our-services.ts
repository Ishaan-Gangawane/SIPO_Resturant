import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-our-services',
  imports: [CommonModule,MatIconModule],
  templateUrl: './our-services.html',
  styleUrl: './our-services.scss'
})
export class OurServices {

  features = [
    {
      icon: 'lunch_dining',
      title: 'Fresh Healthy Food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.',
    },
    {
      icon: 'local_shipping',
      title: 'Free Fast Home Delivery',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.',
    },
    {
      icon: 'local_offer',
      title: 'Discount Voucher',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.',
    },
    {
      icon: 'schedule',
      title: 'On Time Service',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.',
    },
  ];
  
}
