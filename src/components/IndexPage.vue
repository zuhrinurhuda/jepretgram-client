<template>
  <div class="ui fluid container">
    <navbar-component/>
    <router-view/>
    <footer-component/>
    <modal-component/>
  </div>
</template>

<script>
  import NavbarComponent from '@/components/NavbarComponent'
  import FooterComponent from '@/components/FooterComponent'
  import ModalComponent from '@/components/ModalComponent'
  export default {
    name: 'IndexPage',
    components: {
      NavbarComponent,
      FooterComponent,
      ModalComponent
    }
  }
</script>

<style scoped>

</style>
