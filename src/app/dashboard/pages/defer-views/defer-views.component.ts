import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '@shared/heavy-loaders/heavy-loaders-slow.component';
import { TitleComponent } from "../../../shared/title/title.component";

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [CommonModule, HeavyLoadersSlowComponent, TitleComponent],
  templateUrl: './defer-views.component.html',
  styleUrl: './defer-views.component.css'
})
export default class DeferViewsComponent {


}
