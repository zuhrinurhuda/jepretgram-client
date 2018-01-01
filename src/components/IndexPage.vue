<template>
  <div class="ui fluid container">
    <navbar-component/>
    <main-component/>
    <footer-component/>
  </div>
</template>

<script>
  import NavbarComponent from '@/components/NavbarComponent'
  import MainComponent from '@/components/MainComponent'
  import FooterComponent from '@/components/FooterComponent'
  export default {
    name: 'IndexPage',
    components: {
      NavbarComponent,
      MainComponent,
      FooterComponent
    }
  }
</script>

<style>

</style>
