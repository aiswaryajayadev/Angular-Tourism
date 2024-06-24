import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { CardComponent } from "../../ui/card/card.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'app-district-list',
    standalone: true,
    templateUrl: './district-list.component.html',
    styleUrl: './district-list.component.scss',
    imports: [NavBarComponent, CardComponent, FooterComponent]
})
export class DistrictListComponent {

  districts: any[] = [];

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
      console.log("district list page",this.districts);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
