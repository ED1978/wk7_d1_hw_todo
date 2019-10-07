import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

  new Vue({
    el: "#app",
    data: {
      toDos:[
        {task: "Laundry", priority: "low"},
        {task: "Dishes", priority: "high"},
        {task: "Shopping", priority: "high"}
      ],
      newToDo: ""
    },
    methods: {
      saveNewToDo: function() {
        this.toDos.push({
          task: this.newToDo,
          priority: this.newPriority
        });
        this.newToDo = "";
      }
    }
  })

});
