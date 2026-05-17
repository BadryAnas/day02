import { Component, createNgModule } from "@angular/core";
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

    add()
    {
        var obj = {
            title : this.title,
            description : this.description,
            category: this.category,
            tags : this.tags,
            Date :  this.Date,
            Priority :this.Priority   
        }
        this.objs.push(obj)
        console.log(this.objs)
    }



}