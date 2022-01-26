<template lang="pug">
.modal-backdrop(@click.self="close()")
  .modal
    h2 Task details
    form(@submit.prevent="saveChanges()")
      div.input_box(:class="{'not-active': !editMode}")
        label Title:
        input.input(v-model='newTask.title' :disabled='!editMode' @keyup='checkFormState()')
      div.input_box(:class="{'not-active': !editMode }")
        label Description:
        textarea.input(v-model='newTask.description' :disabled='!editMode'  @keyup='checkFormState()')
      .btn_box
        button.btn.cancel(@click="close()") Cancel
        button.btn(type="submit" v-if='editMode && isChanged') Save
        button.btn(@click="editMode = true" v-if='!editMode' ) Edit
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TaskModal',
  props: [
    'task'
  ],
  data () {
    return {
      editMode: false,
      defaultForm: Object.assign({}, this.task) as any,
      newTask: Object.assign({}, this.task) as never,
      isChanged: false
    }
  },
  components: {},
  mounted () {
    this.editMode = !this.task?.id
  },
  methods: {
    close (): void {
      this.$emit('close')
    },
    saveChanges () {
      this.$emit('onTaskChanged', this.newTask)
    },
    checkFormState () {
      for (const key in this.defaultForm) {
        this.isChanged = true
      }
    }
  }
})
</script>

<style scoped lang="scss">
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
}
.modal {
  background: #ffffff;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  border-radius: 5px;
  z-index: 9;
  padding: 30px;
  .input_box {
    margin-bottom: 15px;
    .input {
        background: #fff;
        resize: none;
        border: 1px solid #000;
      padding: 5px 15px;
      display: block;
      width: 100%;
      }
    label {
      display: block;
      margin-bottom: 5px;
    }
  }
  .btn_box {
    display: flex;
  }
  .not-active {
    .input {
      border: none;
    }
  }
}

</style>
