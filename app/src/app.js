import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

  new Vue({
    el: "#app",
    data: {
      toDos:[
        {task: "Laundry"},
        {task: "Dishes"},
        {task: "Shopping"}
      ],
      newToDo: ""
    },
    methods: {
      saveNewToDo: function() {
        this.toDos.push({
          task: this.newToDo
        })
      }
    }
  })

});
