<template>
  <router-view/>
</template>

<script>

</script>

<style lang="scss">
@import 'scss/base/_vartiables.scss', 'scss/base/_fonts.scss';

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

a {
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
  }
}

li {
  list-style: none;
}

a:focus,
a:active,
button:focus,
input:focus,
textarea:focus,
select:focus {
  outline: none;
}

button {
  cursor: pointer;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

body {
  color: $main-color;
  font: 400 16px/20px $main-font;
}

#app {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
}

.main {
  width: calc(100% - 270px);
  background: $main-bg;
  @media screen and (max-width: $tablets-big) {
    width: 100%;
  }
}

h1, .h1 {
  font: 400 32px/43px $main-font;
  margin-bottom: 30px;
}

.mobile_menu_btn {
  display: none;
  @media screen and (max-width: $tablets-big) {
    display: block;
    margin-right: 20px;
  }

  span {
    width: 20px;
    height: 2px;
    display: block;
    background: $grey-bg;
    margin: 5px 0;
    transition: 0.3s;
  }

  &.active {
    span:first-child {
      transform: rotate(-45deg);
      position: relative;
      top: 3px;
    }

    span:nth-child(2) {
      transform: rotate(45deg);
      position: relative;
      bottom: 4px;
    }

    span:last-child {
      opacity: 0;
    }
  }
}

.more_hidden_box {
  z-index: -1;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
}

.open .more_hidden_box {
  visibility: visible;
  z-index: 1;
  opacity: 1;
}

.btn {
  border-radius: 15px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30px;
  font-size: 14px;
  line-height: 1;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }
}

.btn_grey {
  @extend .btn;
  background: $grey-light;
  color: $main-color;
}

.btn_yellow {
  @extend .btn;
  color: $yellow;
  background: $yellow-light;
}

.chat {
  padding: 8px 15px 6px;

  &:before {
    content: '';
    width: 16px;
    height: 16px;
    display: inline-block;
    background: url('assets/chat.svg') center/contain no-repeat no-repeat;
    margin-right: 5px;
    vertical-align: middle;
  }
}

.tab_pane {
  display: none;
  width: 730px;
  max-width: 100%;
  background: $white;
  border-radius: 8px;
  margin: 30px auto;
  padding: 35px 30px;
  @media screen and (max-width: $tablets) {
    padding: 30px 15px;
  }
  @media screen and (max-width: $tablets) {
    table {
      display: block;

      tr {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-bottom: 30px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  &.active {
    display: block;
  }

  .date {
    opacity: 0.5;
    font-size: 14px;
    color: $main-color;
    margin-bottom: 32px;
    text-transform: uppercase;
  }

  td {
    padding-bottom: 30px;
    vertical-align: top;
    @media screen and (max-width: $tablets) {
      display: block;
      padding-bottom: 15px;
    }
  }

  .type {
    width: 60px;
    @media screen and (max-width: $tablets) {
      order: 1;
    }

    .icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      &:before {
        content: '';
        display: inline-block;
        width: 12px;
        height: 12px;
      }

      &.done {
        background: $done;

        &:before {
          background: url('assets/check.svg') center/contain no-repeat no-repeat;
        }
      }

      &.comment {
        background: $yellow-light;

        &:before {
          background: url('assets/check.svg') center/contain no-repeat no-repeat;
        }
      }

      &.upload {
        background: $upload;

        &:before {
          background: url('assets/check.svg') center/contain no-repeat no-repeat;
        }
      }
    }
  }

  .description {
    padding-right: 5px;
    @media screen and (max-width: $tablets) {
      order: 3;
    }

    p {
      width: 100%;
      max-width: 460px;
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .note {
      padding: 20px 30px;
      background: $note;
      border-radius: 10px;
      font-size: 15px;
    }

    .img_box {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin: 0 -5px;

      li {
        margin: 0 5px 10px;
        border-radius: 8px;
        overflow: hidden;
        width: 100px;
        cursor: pointer;
      }
    }
  }

  .time {
    opacity: 0.7;
    font-size: 14px;
    text-align: right;
    line-height: 20px;
    white-space: nowrap;
    @media screen and (max-width: $tablets) {
      order: 2;
    }
  }

  .name {
    min-width: 200px;
    max-width: 100%;
    padding-right: 5px;
  }
}

table {
  width: 100%;
  text-align: left;
  border-collapse: collapse;

  th {
    padding-bottom: 40px;
    padding-right: 15px;
    @media screen and (max-width: $tablets) {
      display: none;
    }
  }
}
</style>
