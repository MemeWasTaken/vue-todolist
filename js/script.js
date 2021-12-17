const app = new Vue({
  el: '#containerVue',
  data: {
    tasks: [
      {
        textToDo: 'Lorem ipsum dolor sit amet consectetur adipisicing',
        completed: false,
      },
    ]
  },
  methods: {
    checked: function () {
      console.log(this.tasks[i].completed);
        if(this.tasks[i].completed == false) {
          this.tasks[i].completed = true;
            console.log(this.tasks[i].completed);
          } else {
            this.tasks[i].completed = false;
            console.log(this.tasks[i].completed);
        }
    },
  },
});