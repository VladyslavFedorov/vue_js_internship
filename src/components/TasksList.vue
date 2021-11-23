<template lang="pug">
table
 tr
  th Name
  th Description
  th Deadlines
 tr(v-bind:key="task" v-for="task in tasks")
  td.name {{ task.title }}
  td.description {{ task.description }}
  td.time {{ task.deadlines }}
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
      ]
    }
  }
})
</script>

<style scoped lang="scss">
@import '../scss/base/vartiables.scss';

</style>
