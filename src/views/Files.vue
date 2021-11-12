<template>
  <Sidebar/>
  <div class="main">
    <Header/>
    <h1>Files</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'

export default defineComponent({
  name: 'Files',
  components: {
    Sidebar, Header
  }
})
</script>
