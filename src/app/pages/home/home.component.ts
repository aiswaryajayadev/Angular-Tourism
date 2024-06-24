import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { CardComponent } from "../../ui/card/card.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [NavBarComponent, CarouselComponent, CardComponent, FooterComponent]
})
export class HomeComponent {
  districts: any[] = [];
  keralaImages:any[]=[];
 commonArray:any[]=[]
  tag:string="home"
// if home {
//   common =kerla
// }
// else distr{

// }
  constructor() { }

  async ngOnInit(): Promise<void> {
    await this.getData();
  }

  private async getData(): Promise<void> {
    try {
      const response = await fetch('assets/data.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.districts = data.districts;
      this.keralaImages = data.keralaImages;
      console.log("images",this.keralaImages);
      
      console.log("home district list ",this.districts);
      console.log("district id",this.districts);
      
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
