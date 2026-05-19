import { Component } from "@angular/core";
import { Task } from "../Task/task";
import { TaskList } from "../TaskList/taskList";

@Component({
    selector:'taskProject',
    templateUrl:'./taskProject.html',
    styleUrl: './taskProject.css',
    imports: [Task, TaskList]
})
export class TaskProject{

    Tasks : Task[] = []

    AllTasks(task: any )
    {
        this.Tasks.push(task)
    }

    UpdateTask(updatedTask : Task)
    {
        for (let task of this.Tasks)
        {
            if (task.title == updatedTask.title)
            {
                task.description = updatedTask.description;
                task.category = updatedTask.category;
                task.tags = updatedTask.tags;
                task.Date = updatedTask.Date;
                task.Priority = updatedTask.Priority;
                task.done = updatedTask.done;
                return;
            }
        }
    }

    DeleteTask(deletedTask : Task)
    {
        this.Tasks = this.Tasks.filter(t => t.title != deletedTask.title)
    }

}