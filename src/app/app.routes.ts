import { Routes } from '@angular/router';
import { Task } from './Components/Task/task';
import { Slider } from './Components/Slider/slider';
import { take } from 'rxjs';
import { TaskList } from './Components/TaskList/taskList';
import { Login } from './Components/Login/login';
import { guard } from './Components/Login/guard';

export const routes: Routes = [
    {
        path: 'form',
        component: Task,
        canActivate: [guard]
    },
    {
        path: "slider",
        component: Slider,
        canActivate: [guard]
    },
    {
        path: 'tasklist',
        component: TaskList,
        canActivate: [guard]
    },

     {
        path: 'login',
        component: Login
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
