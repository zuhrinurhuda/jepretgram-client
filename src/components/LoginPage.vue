<template>
  <div class="ui container">
    <div class="ui middle aligned equal width stackable grid">
      <div class="column large screen only">
        <div class="ui stackable grid">
          <div class="right floated twelve wide column">
            <div class="ui right floated image">
              <img src="../assets/phone.png" alt="Phone">
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="ui center aligned stackable grid">
          <div class="eight wide mobile eight wide tablet ten wide computer column">
            <div class="ui center aligned segment">
              <img class="ui centered jepret-logo image" src="../assets/jepretgram.png" alt="Jepretgram Logo">
              <img class="ui centered jepret-icon image" src="../assets/camera.png" alt="Jepretgram Icon">
              <button class="ui facebook button">
                <i class="facebook icon"></i>
                Log in with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LoginPage'
  }
</script>

<style scoped>
  .ui.middle.aligned.equal.width.stackable.grid {
    height: 100vh;
  }
  .jepret-logo {
    max-width: 200px;
    padding-bottom: 2em;
  }

  .jepret-icon {
    max-width: 100px;
    padding-bottom: 2em;
  }

  .ui.facebook.button {
    background-color: #4060B8;
  }

  .ui.segment {
    padding: 3em;
  }
</style>
