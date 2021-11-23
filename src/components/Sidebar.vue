<template lang="pug">
.sidebar
 .box
  .sidebar_top
   .logo_box
    img(src="@/assets/logo.svg" alt="logo")
   .name PROJECTUS
   .search_box
    .search_btn
  .profile_box
   .avatar
    img(src="@/assets/ava.png" alt="ava")
   .text
    .name Jean Gonzales
    .description Product Owner
   .more_box
    .more_btn
     span
     span
     span
    .more_hidden_box
  .tasks_info_box
   .completed_tasks
    .num(@click="quantity") {{ completedTasks }}
    .text Completed Tasks
   .open_tasks
    .num {{ this.openTasks }}
    .text Open Tasks
  .menu
   .title Menu
   ul
    li.menu_item
     a(href="#") Home
    li.menu_item
     a(href="#") My Tasks
    li.menu_item
     a(href="#") Notifications
      span.counter 3
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data () {
    return {
      openTasks: 2,
      completedTasks: 372,
      confirmQuestion: 'Are you sure you want to change the number of tasks?'
    }
  },
  methods: {
    quantity () {
      const confirmQuestion = confirm(this.confirmQuestion)
      if (confirmQuestion === true && this.openTasks > 0) {
        this.openTasks--
        this.completedTasks++
      } else if (confirmQuestion === false && this.openTasks > 0) {
      } else {
        alert('Аll tasks are closed, keep it up!')
      }
    }
  }
})

</script>

<style scoped lang="scss">
@import '../scss/base/vartiables.scss';
.sidebar {
  background: $black;
  width: 270px;
  color: $white;
  @media screen and (max-width: $tablets-big) {
    position: fixed;
    height: 100vh;
    transition: 0.3s;
    z-index: -1;
    opacity: 0;
    visibility: hidden;
    right: 0;
    top: 0;
    bottom: 0;
    &.active {
      z-index: 999;
      opacity: 1;
      visibility: visible;
    }
  }
  .box {
    @media screen and (max-width: $tablets-big) {
      overflow-y: scroll;
      height: 100%;
    }
  }
  .sidebar_top {
    padding: 30px 20px 30px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .name {
      padding: 0 13px;
      line-height: 24px;
      text-transform: uppercase;
    }
  }
  .search_box {
    .search_btn {
      cursor: pointer;
      &:before {
        content: '';
        width: 16px;
        height: 16px;
        display: block;
        background: url('../assets/search.svg') center/contain no-repeat no-repeat;
      }
    }
  }
  .profile_box {
    padding: 16px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: $grey-bg;
    .avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      overflow: hidden;
    }
    .text {
      padding: 0 15px;
      .name {
        font-size: 14px;
        line-height: 19px;
        padding-bottom: 2px;
      }
      .description {
        font-size: 12px;
        line-height: 17px;
        color: $grey;
      }
    }
    .more_box {
      .more_btn {
        width: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        span {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: $grey;
        }
      }
    }
  }
  .tasks_info_box {
    padding: 20px 30px;
    display: flex;
    align-items: center;
    & > div {
      padding-right: 17px;
    }
    .num {
      font-size: 20px;
      line-height: 27px;
    }
    .text {
      font-size: 12px;
      line-height: 17px;
      opacity: 0.5;
    }
    .completed_tasks {
      cursor: pointer;
    }
  }
  .menu {
    padding: 10px 30px;
    .title {
      font-size: 12px;
      color: $sidebar-menu-title;
      line-height: 18px;
      margin-bottom: 18px;
      display: block;
      text-transform: uppercase;
    }
    .menu_item {
      a {
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        width: 100%;
        transition: 0.3s;
        &.active,
        &:hover {
          opacity: 0.7;
        }
      }
      .counter {
        width: 20px;
        min-width: 20px;
        height: 20px;
        border-radius: 50%;
        background: $yellow;
        margin: 0 9px;
        font-size: 13px;
        color: $main-color;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
