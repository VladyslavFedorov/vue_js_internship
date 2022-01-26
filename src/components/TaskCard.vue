<template lang="pug">
.task-card(@click='openModal()')
 .status
  span.btn_grey(v-if='task.status === taskStatus.todo') To Do
  span.btn_grey(v-if='task.status === taskStatus.inProgress') In Progress
  span.btn_grey(v-if='task.status === taskStatus.done') Done
 .title {{task.title}}
 .date {{task.addTime}}
task-modal(v-if="isOpenModal" @close="close()" @onTaskChanged='updateTask($event)' :task='task')
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { TaskStatus } from '@/types/task'
import TaskModal from '@/components/Modal.vue'

export default defineComponent({
  name: 'TaskCard',
  data () {
    return {
      taskStatus: TaskStatus,
      isOpenModal: false
    }
  },
  props: {
    task: Object,
    index: Number
  },
  components: {
    TaskModal
  },
  methods: {
    close () {
      this.isOpenModal = false
    },
    openModal () {
      this.isOpenModal = true
    },
    updateTask (data: never) {
      this.$emit('onTaskChanged', data)
      this.isOpenModal = false
    }
  }
})
</script>

<style scoped lang="scss">
.task-card {
  padding: 15px;
  box-shadow: 2px 3px 10px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  .title {
    font-weight: 700;
  }
  .date {
    opacity: 0.7;
    font-size: 14px;
    text-align: right;
    line-height: 20px;
    white-space: nowrap;
    margin: 0;
  }
  .status {
    margin-bottom: 10px;
  }
}
</style>
