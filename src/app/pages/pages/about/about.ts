import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-about',
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  standalone:true
})
export class About {

}
