<template>
  <div class="ui fluid container">
    <navbar-component/>
    <router-view/>
    <footer-component/>
    <loading-component/>
    <modal-component/>
  </div>
</template>

<script>
  import NavbarComponent from '@/components/NavbarComponent'
  import FooterComponent from '@/components/FooterComponent'
  import LoadingComponent from '@/components/LoadingComponent'
  import ModalComponent from '@/components/ModalComponent'
  export default {
    name: 'IndexPage',
    components: {
      NavbarComponent,
      FooterComponent,
      LoadingComponent,
      ModalComponent
    }
  }
</script>

<style scoped>

</style>
