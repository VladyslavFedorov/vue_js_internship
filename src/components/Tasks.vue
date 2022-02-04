<template lang="pug">
h2 Add new Tasks
div.errors_box(v-if="errors.length")
  b Please add:
  ul
   li(v-for="error in errors") {{ error }}
form.tasks_form(v-on:submit.prevent="checkForm")
 input(type='text' placeholder='Name' v-model="taskNameValue")
 input(type='text' placeholder='Description' v-model="taskDescriptionValue")
 button.btn_submit Add
h2 Active Tasks
table.tasks_table
  tr
    th Name
    th Description
    th Add Time
    th
  tr(:key="task + index" v-for="(task, index) in tasks")
    td.name {{ task.title }}
    td.description {{ task.description }}
    td.time {{ task.addTime }}
    td.close
     span.close_task(@click="deleteTask(index)") X
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  el: '.tasks_form',
  data: function () {
    return {
      tasks: [
        {
          title: 'Listing on Product Hunt',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          addTime: '26.11.2021, 11:35:13'
        },
        {
          title: 'Listing on Product Hunt',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          addTime: '26.11.2021, 11:32:13'
        },
        {
          title: 'Listing on Product Hunt',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          addTime: '26.11.2021, 11:30:13'
        }
      ],
      taskNameValue: '',
      taskDescriptionValue: '',
      utc: '',
      errors: [] as string[]
    }
  },
  methods: {
    deleteTask (index: number) {
      this.tasks.splice(index, 1)
    },
    checkForm: function () {
      this.errors = []
      if (this.taskNameValue && this.taskDescriptionValue) {
        this.utc = new Date().toLocaleString()
        this.tasks.unshift({
          title: this.taskNameValue,
          description: this.taskDescriptionValue,
          addTime: this.utc
        })
        this.taskNameValue = ''
        this.taskDescriptionValue = ''
        return true
      }
      if (!this.taskNameValue) {
        this.errors.push('Name')
      }
      if (!this.taskDescriptionValue) {
        this.errors.push('Description')
      }
    }
  }
})

</script>
