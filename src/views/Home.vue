<template lang="pug">
Sidebar
.main
 Header
 .content
  .tab_content
   .tab_pane.active
    router-view
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Sidebar, Header
  }
})
</script>
