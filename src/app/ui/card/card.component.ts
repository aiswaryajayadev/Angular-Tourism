import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { Router } from '@angular/router';


@Component({
    selector: 'app-card',
    standalone: true,
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
    imports: [ButtonComponent]
})
export class CardComponent {
constructor(private router:Router){}
  @Input() title:string="title"
@Input() description:string="description"
@Input() src!:string
@Input() id!:number


goToDistrictPage(){
  this.router.navigate(['/districtInd',this.id])
}

}
