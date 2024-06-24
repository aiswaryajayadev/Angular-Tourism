import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ActivatedRoute } from '@angular/router';
import { CarouselComponent } from "../../components/carousel/carousel.component";

@Component({
    selector: 'app-district-ind-page',
    standalone: true,
    templateUrl: './district-ind-page.component.html',
    styleUrl: './district-ind-page.component.scss',
    imports: [NavBarComponent, FooterComponent, CarouselComponent]
})
export class DistrictIndPageComponent {

    districts: any[] = [];
    id:number=0
    tag:string="districts"

  constructor( private route:ActivatedRoute ) {}

  async ngOnInit(): Promise<void> {
    await this.getData();
    this.route.params.subscribe(params => {
        this.id=+params['id'];
    })
  }

  private async getData(): Promise<void> {
    try {
      const response = await fetch('assets/data.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.districts = data.districts;
      console.log(this.districts);
      console.log(this.districts[this.id].name);
      

      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
