import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() movieList:string[] = [];

  @Output() 
  movieEventEmitter = new EventEmitter();
  selectedMovie(movie:string){
     this.movieEventEmitter.emit(movie);
  }
}
