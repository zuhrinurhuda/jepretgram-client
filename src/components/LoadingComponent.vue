<template>
  <div class="ui active inverted dimmer" v-if="isLoading">
    <div class="ui text loader">Loading</div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'LoadingComponent',
    computed: {
      ...mapGetters(['isLoading'])
    }
  }
</script>

<style>

</style>
