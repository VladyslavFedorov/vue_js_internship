<template lang="pug">
h2 Add new Tasks
form.tasks_form(v-on:submit="addTask")
 input(type='text' required='required' placeholder='Name' v-model="TaskNameValue")
 input(type='text' required='required' placeholder='Description' v-model="TaskDescriptionValue")
 button.btn_submit Add
h2 Active Tasks
table.tasks_table
  tr
    th Name
    th Description
    th Deadlines
    th
  tr(:key="task" v-for="(task, index) in tasks")
    td.name {{ task.title }}
    td.description {{ task.description }}
    td.time {{ task.deadlines }}
    td.close
     span.close_task(@click="deleteTask(index)") X
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: function () {
    return {
      tasks: [
        {
          id: 1,
          title: 'Listing on Product Hunt',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          deadlines: '26.11.2021'
        },
        {
          id: 2,
          title: 'Listing on Product Hunt',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          deadlines: '26.11.2021'
        },
        {
          id: 3,
          title: 'Listing on Product Hunt',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          deadlines: '26.11.2021'
        }
      ],
      TaskNameValue: '',
      TaskDescriptionValue: '',
      nextId: 4,
      utc: new Date().toLocaleDateString()
    }
  },
  methods: {
    deleteTask (index) {
      this.tasks.splice(index, 1)
    },
    addTask (event) {
      event.preventDefault()
      this.tasks.unshift({
        id: this.nextId++,
        title: this.TaskNameValue,
        description: this.TaskDescriptionValue,
        deadlines: this.utc
      })
      this.TaskNameValue = ''
      this.TaskDescriptionValue = ''
    }
  }
})

</script>
