import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from "@shared/title/title.component";

type Grade ='A'|'B'|'F';
const GRADES: Grade[] = ['A', 'B', 'F'];

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export default class ControlFlowComponent {

  public showContent = signal(false);
  public grade = signal<Grade>('A');

  public frameworks = signal(['Angular','Vue','Swelte','Qwik','React'])
  public frameworks2 = signal([])


  public toggleContent() {

    this.showContent.update(value => !value);
  }

  public changeLetter(){
    const randomIndex = Math.floor(Math.random() * GRADES.length);
    this.grade.set(GRADES[randomIndex]);
  }
}
