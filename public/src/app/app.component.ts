import { Component,OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks API';
  tasks: any = [];
  theTask: any;
  taskHasBeenClicked: boolean = false;
  
  
  constructor(private _httpService: HttpService){
    

  }
  ngOnInit(){
    this.theTask = { title: "" , description: "", completed: "" }

  }
 
  onButtonClick(){
    let obs = this._httpService.getTasks();
    obs.subscribe((data: any) => {
      console.log(data);
    this.tasks = data.data;
    });
    
  }
  showTask(task){
    this.taskHasBeenClicked = true;
    this.theTask = task;
    console.log("This is the task to show:", task);
  }
  
}

