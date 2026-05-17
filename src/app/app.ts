import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './Components/Header/header'
import {Slider} from './Components/Slider/slider'
import { TaskProject } from "./Components/TaskProject/taskProject";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, Slider, TaskProject]
})
export class App {
  protected readonly title = signal('day02');
}
