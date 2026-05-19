import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { Task } from "../Task/task";
import { email } from "@angular/forms/signals";

@Component({
    selector:"taskList",
    templateUrl:"taskList.html",
    styleUrl:"taskList.css",
    imports: [FormsModule]
})
export class TaskList{

    @Input()
    AllTasks : Task[] = []

    @Output()
    sendUpdatedDataToParent = new EventEmitter()
    @Output()
    sendDeletedDataToParent = new EventEmitter()


    displayedTasks : Task[] = []

    DisplayAllTasks()
    {
        this.displayedTasks = this.AllTasks;
    }
    DisplayDone()
    {
        this.displayedTasks = this.AllTasks.filter(t => t.done)
    }

    DisplayNotDone()
    {
        this.displayedTasks = this.AllTasks.filter(t => !t.done)
    }
    

    Done(task : Task)
    {
        task.done = true;
        this.sendUpdatedDataToParent.emit(task)
    }

    Update(task : Task)
    {
        this.sendUpdatedDataToParent.emit(task)
    }


    Delete(task : Task)
    {
        this.sendDeletedDataToParent.emit(task);
    }
}