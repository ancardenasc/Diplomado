let tasks = [];
let taskId = 0;

class Task{
  constructor(name){
      this.name = name;
      this.id = taskId++;
      this.completed = false;
    }

    taskCompleted(){
      this.completed = !this.completed;
    }
}