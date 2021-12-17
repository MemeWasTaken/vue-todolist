const app = new Vue({
  el: '#containerVue',
  data: {
    tasks: [
      {
        textToDo: 'Lorem ipsum dolor sit amet consectetur adipisicing',
        completed: false,
      }
    ]
  },
  methods: {
    checked: function () {
        if(this.completed == false) {
            this.completed = true;
            console.log(this.completed);
          } else {
            this.completed = false;
            console.log(this.completed);
        }
    },
  },
});