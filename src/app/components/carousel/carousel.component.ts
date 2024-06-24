import { Component, Input, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  districts: any[] = [];
  keralaImages: any[] = [];
  commonArray: any[] = [];

  id: number = 0;
  @Input() tag: string = '';
  text:string=''
  constructor(private route: ActivatedRoute) {}
  private async getData(): Promise<void> {
    try {
      const response = await fetch('assets/data.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.districts = data.districts;
      this.keralaImages = data.keralaImages;
      console.log('images', this.keralaImages);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  async ngOnInit(): Promise<void> {
    await this.getData();
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });

    if (this.tag === 'home')
       {

      this.commonArray = this.keralaImages;
      this.text="Welcome to God's Own Country"
      console.log('home images', this.commonArray);
    } 
    else if (this.tag === 'districts')
       {
      this.commonArray = this.districts[this.id].image;
      this.text=this.districts[this.id].name;
      console.log('district images', this.commonArray);
    }
  

  }

  
}
