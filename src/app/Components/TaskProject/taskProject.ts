import { Component } from "@angular/core";
import { Task } from "../Task/task";
import { TaskList } from "../TaskList/taskList";

@Component({
    selector:'taskProject',
    templateUrl:'./taskProject.html',
    styleUrl: './taskProject.css',
    imports: [Task, TaskList]
})
export class TaskProject{}