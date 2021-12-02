<template lang="pug">
h1 404
router-link(to='/tasks')  homepage.
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '404'
})
</script>
