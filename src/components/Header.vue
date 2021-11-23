<template lang="pug">
header(:id="header")
 .header_main
  .title_box
   .mobile_menu_btn(v-bind:class="{ active: isActive }" v-on:click="isActive = !isActive")
    span
    span
    span
   .logo
    img(src="@/assets/logo.png" alt="logo")
   .name Website Redesign
   .action_box
    .more_btn
      span
      span
      span
    .more_hidden_box
  .header_actions
    ul
     li
      a(href="#")
       img(src="@/assets/ava.png" alt="ava")
     li
      a(href="#")
       img(src="@/assets/ava.png" alt="ava")
     li
      a(href="#")
       img(src="@/assets/ava.png" alt="ava")
    .btn_box
     a.btn_grey(href="#") Share
     a.btn_yellow.chat(href="#") Chat
 .tab_links
  ul(:id="nav")
   router-link(to="/tasks") Tasks
   router-link(to="/kanban") Kanban
   router-link(to="/") Activity
   router-link(to="/calendar") Calendar
   router-link(to="/files") Files
</template>

<script lang="ts">
export default {
  data: function () {
    return {
      isActive: false
    }
  }
}
</script>

<style scoped lang="scss">
@import '../scss/base/vartiables.scss';

header {
  padding: 40px 30px 0;
  background: $white;
  @media screen and (max-width: $tablets) {
    padding: 15px 15px 0;
  }

  .header_main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 20px;

    .title_box {
      display: flex;
      align-items: center;
      @media screen and (max-width: $tablets) {
        margin-bottom: 20px;
        width: 100%;
      }

      .logo {
        width: 40px;
        margin-right: 15px;
        background: $yellow;
        border-radius: 8px;
      }

      .name {
        font-size: 32px;
        line-height: 43px;
        margin-right: 11px;
        @media screen and (max-width: $tablets) {
          font-size: 24px;
          line-height: 34px;
          margin-right: 10px;
        }
      }
    }

    .action_box {
      .more_btn {
        width: 30px;
        height: 30px;
        background: $grey-light;
        border-radius: 50%;
        overflow: hidden;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
          width: 4px;
          height: 4px;
          background: $grey;
          border-radius: 50%;
          margin: 0 1px;
          display: block;
        }
      }
    }
  }

  .header_actions {
    display: flex;
    align-items: center;

    ul {
      display: flex;
      align-items: center;
      margin: 0 -5px;

      a {
        width: 30px;
        height: 30px;
        margin: 0 3px;
        display: block;
        overflow: hidden;
        border-radius: 50%;
        transition: 0.3s;

        &:hover {
          opacity: 0.7;
        }
      }
    }

    .btn_box {
      display: flex;
      align-items: center;

      a {
        margin-left: 15px;
      }
    }
  }

  .tab_links {
    ul {
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      a {
        margin-right: 30px;
        display: flex;
        padding-bottom: 12px;
        position: relative;
        border-bottom: 2px solid rgba(255, 194, 0, 0);
        transition: 0.3s;
        opacity: 0.7;

        &.router-link-active, &:hover {
          opacity: 1;
          border-bottom: 2px solid $yellow;
        }

        @media screen and (max-width: $tablets) {
          margin-right: 15px;
          font-size: 14px;
        }
      }

      li:last-child a {
        margin-right: 0;
      }
    }
  }
}

</style>
