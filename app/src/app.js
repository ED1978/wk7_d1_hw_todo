import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

  new Vue({
    el: "#app",
    data: {
      toDos:[
        {task: "Laundry", priority: false},
        {task: "Dishes", priority: true},
        {task: "Shopping", priority: true}
      ],
      newToDo: "",
      newPriority: null 
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
