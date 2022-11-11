<template>
    <div class="main">
        main  
    </div>
</template>

<script>
export default {
  name: 'TheMain',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.main {
  width: calc(100% - 204px);
  height: calc(100vh - 56px);
}
</style>
