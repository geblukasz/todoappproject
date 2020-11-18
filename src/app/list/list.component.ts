import { Component, OnInit } from '@angular/core';

interface Task {
  name: string;
  isCompleted: boolean;
  // priority: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public list: Array<Task> = [
    {name : "Naprawić rower", isCompleted : false},
    {name : "Odrobić zadanie z matematyki", isCompleted : false},
    {name : "Wyprowadzić psa", isCompleted: true}
  ]

  public inputValue: string;

  constructor() { }

  ngOnInit(): void {
  }

  public handleClick(): void {
    if(this.inputValue && this.inputValue.trim().length > 0){
      this.list.push({
        name: this.inputValue,
        isCompleted: false
      })
      this.inputValue = "";
    } else {
      alert("Pusty string") 
    }
  }

  public remove(task: Task){
    const index  = this.list.indexOf(task);
    this.list.splice(index, 1);
  }

  public markAsCompleted(task: Task){
    alert('Oznaczono zadanie jako wykonane');
    task.isCompleted = true;
  }

  public onKeyDownEvent(event: KeyboardEvent){
      if(event.keyCode === 13){
        this.handleClick();
      }
  }

  public removeCompletedTasks() {
    this.list = this.list.filter(function(x) {
      return !x.isCompleted;
  });
}
}
