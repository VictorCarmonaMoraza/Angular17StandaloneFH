import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {

  @Input({ required: true }) title!: string;
  @Input({transform:booleanAttribute}) withShadow:boolean=false;;
}
