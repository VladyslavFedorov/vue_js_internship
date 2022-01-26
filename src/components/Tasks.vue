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
  tr( v-for="(task, i) in tasks"
    :index="i"
    :key="`task-${i}`"
    :ref="el => { if (el) divs[i] = el }"
    :class="task.status"
    )
    td.name {{ task.title }}
    td.description {{ task.description }}
    td.time {{ task.addTime }}
    td.close
     span.close_task(@click="deleteTask(index)") X
</template>

<script lang="ts">
import { defineComponent, onBeforeUpdate, onMounted, reactive, watchEffect } from 'vue'
import { TaskStatus, taskTypes } from '@/types/task'

export default defineComponent({
  el: '.tasks_form',
  setup: function () {
    const tasks = reactive<taskTypes[]>([
      {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        addTime: '26.11.2021, 11:35:13',
        status: TaskStatus.todo
      },
      {
        id: 2,
        title: 'Lorem ipsum dolor sit amet2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        addTime: '25.11.2021, 11:32:13',
        status: TaskStatus.todo
      },
      {
        id: 3,
        title: 'Lorem ipsum dolor sit amet3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        addTime: '24.11.2021, 11:30:13',
        status: TaskStatus.todo
      }
    ])
    let divs: HTMLElement[] = []
    const fontScale = (list: HTMLElement[], delay: number, animationClass: string) => {
      list.forEach((el: HTMLElement, index) => {
        setTimeout(() => {
          console.log(el)
          el.classList.add(animationClass)
        }, index * delay)
      })
    }
    onMounted(() => {
      fontScale(divs, 200, 'animation')
    })
    onBeforeUpdate(() => {
      divs = []
    })
    return {
      divs,
      tasks
    }
  },
  data: function () {
    return {
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
          id: 0,
          status: TaskStatus.todo,
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
<style lang="scss" itemscope>
  .animation {
    animation-name: text_scale;
    animation-duration: 2s;
  }
  @keyframes text_scale {
    50% {
      font-size: 105%;
    }
    100% {
      font-size: 100%;
    }
  }
</style>
