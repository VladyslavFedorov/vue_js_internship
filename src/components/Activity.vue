<template lang="pug">
.activity_box
  .box
  .date Today
  table
    tr
    td.type
      .icon.done
    td.description
      p Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users
    td.time 8:40 PM
    tr
    td.type
      .icon.comment
    td.description
      p Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users
      .note During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes
    td.time 7:32 PM
    tr
    td.type
      .icon.upload
    td.description
      p Darika Samak uploaded 4 files on An option to search in current projects or in all projects
       ul.img_box
        li(v-bind:key='uploadedFile' v-for='uploadedFile in uploadedFiles')
         img(:src="require('../assets/' + uploadedFile.src)" :alt='uploadedFile.alt')
    td.time 6:02 PM
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: function () {
    return {
      uploadedFiles: [
        {
          id: 1,
          alt: 'img',
          src: 'img.png'
        },
        {
          id: 2,
          alt: 'img',
          src: 'img.png'
        },
        {
          id: 3,
          alt: 'img',
          src: 'img.png'
        },
        {
          id: 4,
          alt: 'img',
          src: 'img.png'
        }
      ]
    }
  }
})
</script>
