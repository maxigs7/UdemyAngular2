import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  showNgIf: boolean = false;

  sentence: any = {
    text: 'A great power requires great responsibility',
    author: 'Ben Parker'
  }

  characters: string[] = ['Spiderman', 'Dr. Octopus', 'Venom']

  toggleNgIf() {
    this.showNgIf = !this.showNgIf;
  }
}
