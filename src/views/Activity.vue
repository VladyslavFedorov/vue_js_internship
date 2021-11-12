<template>
  <Sidebar/>
  <div class="main">
    <Header/>
    <div class="content">
      <div class="tab_content">
        <div class="tab_pane active">
          <div class="activity_box">
            <div class="box">
              <div class="date">Today</div>
              <table>
                <tr>
                  <td class="type">
                    <div class="icon done"></div>
                  </td>
                  <td class="description">
                    <p>Darika Samak mark as done Listing on Product Hunt so that we can reach as
                      many potential users</p>
                  </td>
                  <td class="time">
                    8:40 PM
                  </td>
                </tr>
                <tr>
                  <td class="type">
                    <div class="icon comment"></div>
                  </td>
                  <td class="description">
                    <p>Darika Samak mark as done Listing on Product Hunt so that we can reach as
                      many
                      potential users</p>
                    <div class="note">During a project build, it is necessary to evaluate the
                      product
                      design and development against project requirements and outcomes
                    </div>
                  </td>
                  <td class="time">
                    7:32 PM
                  </td>
                </tr>
                <tr>
                  <td class="type">
                    <div class="icon upload"></div>
                  </td>
                  <td class="description">
                    <p>Darika Samak uploaded 4 files on An option to search in current projects or
                      in all projects</p>
                    <ul class="img_box">
                      <li v-bind:key="uploadedFile" v-for="uploadedFile in uploadedFiles">
                        <img :src="require('../assets/' + uploadedFile.src)" :alt="uploadedFile.alt">
                      </li>
                    </ul>
                  </td>
                  <td class="time">
                    6:02 PM
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'

export default defineComponent({
  name: 'Activity',
  components: {
    Sidebar, Header
  },
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
