import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { CardsComponent } from "../../ui/cards/cards.component";

@Component({
  selector: 'app-home',
  imports: [CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private api: ApiService) { }


  data: any
  ngOnInit() {
    this.api.getProducts().subscribe((res:any) => {
      this.data = res.products;
      console.log(this.data);
      
    });
  }
}
