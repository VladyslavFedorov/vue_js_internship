<template lang="pug">
h1 Kanban
.kanban_section
 .col.todo
  .title To Do
  draggable.box(:list='tasksToDo' group='tasks')
   template(#item='{element}')
    task-card(:task='element')
 .col.in_progress
   .title In Progress
   draggable.box(:list='tasksInProgress' group='tasks')
    template(#item='{element}')
     task-card(:task='element')
 .col.done
   .title Done
   draggable.box(:list='tasksDone' group='tasks')
    template(#item='{element}')
     task-card(:task='element')

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import draggable from 'vuedraggable'
import TaskCard from '@/components/TaskCard.vue'
import { taskTypes, TaskStatus } from '@/types/task'

export default defineComponent({
  data () {
    return {
      taskStatus: TaskStatus,
      tasksToDo: [] as taskTypes[],
      tasksInProgress: [] as taskTypes[],
      tasksDone: [] as taskTypes[],
      currentTask: null
    }
  },
  components: {
    TaskCard,
    draggable
  },
  props: {
    msg: String
  },
  created () {
    this.tasksToDo = [
      {
        title: 'Lorem ipsum dolor sit amet 1',
        description: 'Lorem ipsum dolor sit amet, consecrated animistic elite.',
        addTime: '25.11.2021, 11:32:13',
        status: TaskStatus.todo,
        id: 1
      },
      {
        title: 'Lorem ipsum dolor sit amet 2',
        description: 'Lorem ipsum dolor sit amet, consecrated animistic elite.',
        addTime: '25.11.2021, 11:32:13',
        status: TaskStatus.todo,
        id: 2
      }
    ]
    this.tasksInProgress = [
      {
        title: 'Lorem ipsum dolor sit amet 3',
        description: 'Lorem ipsum dolor sit amet, consecrated animistic elite.',
        addTime: '25.11.2021, 11:32:13',
        status: TaskStatus.inProgress,
        id: 3
      }
    ]
    this.tasksDone = [
      {
        title: 'Lorem ipsum dolor sit amet 4',
        description: 'Lorem ipsum dolor sit amet, consecrated animistic elite.',
        addTime: '25.11.2021, 11:32:13',
        status: TaskStatus.done,
        id: 4
      }
    ]
  }
  // methods: {
  //   updateTask (task: any, array: string) {
  //     (this as any)[array].forEach((el: any, i: number) => {
  //       if (el.id === task.id) {
  //         Vue.set((this as any)[array], i, task)
  //       }
  //     })
  //   }
  // }
})
</script>

<style lang="scss" itemscope>
.kanban_section {
  display: flex;
  .col {
    width: 33.3%;
    padding: 0 5px;
  }
  .title {
    margin-bottom: 15px;
  }
  .todo .status span {
    background: red;
    color: #fff;
  }
  .in_progress .status span{
    background: yellow;
  }
  .done .status span{
    background: green;
    color: #fff;
  }
}
</style>
