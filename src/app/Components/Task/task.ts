import { Component, createNgModule, EventEmitter, Output, output } from "@angular/core";
import { createLinkedSignal } from "@angular/core/primitives/signals";
import { FormsModule } from "@angular/forms";

@Component({
    selector:"task",
    templateUrl:"task.html",
    styleUrl:"task.css",
    imports:[FormsModule]
})
export class Task
{
    objs : Object[] = []

    title : string = ''
    description : string = ''
    category : string = ''
    tags : string = ''
    Date : string = ''
    Priority : string = ''
    done : boolean = false

    @Output()
    sendTask = new EventEmitter()

    add()
    {
        var obj = {
            title : this.title,
            description : this.description,
            category: this.category,
            tags : this.tags,
            Date :  this.Date,
            Priority :this.Priority ,  
            done : this.done
        }
        
        this.objs.push(obj)
        console.log(this.objs)
        this.sendTask.emit(obj)
    }

    


}