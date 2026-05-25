import { Component } from "@angular/core";
import { ISlider } from "./ISlider";

@Component({
    selector :"slider",
    templateUrl:"./slider.html",
    styleUrl:"./slider.css"
})
export class Slider implements ISlider {

    images : string[];
    cur : number;
    state : number = 0

    constructor() {

        this.images = [
                "images/1.jpg",
                "images/2.jpg",
                "images/3.jpg",
                "images/4.jpg",
                "images/5.jpg",
                "images/6.jpg",
                "images/7.jpg",
                "images/8.jpg",                
            ];

        this.cur = 0;

    }


    ngOnInit()
    {
        this.state = setInterval(() => {
            this.cur++;

            if (this.cur >= this.images.length) {
                this.cur = 0;
            }

        }, 2000);
    }

    ngOnDestroy()
    {
        clearInterval(this.state);
    }
    
    // init()
    // {
    //     this.state = setInterval(() => {
    //         this.cur++;

    //         if (this.cur >= this.images.length) {
    //             this.cur = 0;
    //         }

    //     }, 2000);
    // }

    // stop(){
    //     clearInterval(this.state);
    // }

    nextImage() {
        this.cur++;
        if (this.cur == this.images.length) 
        {
            this.cur = 0;
        }
    }

    prevImage() {
        this.cur--;
        if (this.cur < 0) 
        {
            this.cur = this.images.length - 1;
        }
    }

}