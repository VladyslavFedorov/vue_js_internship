<template>
  <table>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Deadlines</th>
    </tr>
    <tr v-bind:key="task" v-for="task in tasks">
      <td class="name">{{ task.title }}</td>
      <td class="description">{{ task.description }}</td>
      <td class="time">{{ task.deadlines }}</td>
    </tr>

  </table>
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
