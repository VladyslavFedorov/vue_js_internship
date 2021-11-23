<template lang="pug">
Sidebar
.main
 Header
 .content
  .tab_content
   .tab_pane.active
    TasksList
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import TasksList from '@/components/TasksList.vue'

export default defineComponent({
  name: 'Tasks',
  components: {
    Sidebar, Header, TasksList
  }
})
</script>
