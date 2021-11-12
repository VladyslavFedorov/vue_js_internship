<template>
  <Sidebar/>
  <div class="main">
    <Header/>
    <div class="content">
      <div class="tab_content">
        <div class="tab_pane active">
          <TasksList/>
        </div>
      </div>
    </div>
  </div>
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
