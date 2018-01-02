<template>
  <div class="ui fluid container">
    <navbar-component/>
    <main-component/>
    <footer-component/>
    <modal-component/>
  </div>
</template>

<script>
  import NavbarComponent from '@/components/NavbarComponent'
  import MainComponent from '@/components/MainComponent'
  import FooterComponent from '@/components/FooterComponent'
  import ModalComponent from '@/components/ModalComponent'
  export default {
    name: 'IndexPage',
    components: {
      NavbarComponent,
      MainComponent,
      FooterComponent,
      ModalComponent
    }
  }
</script>

<style>

</style>
