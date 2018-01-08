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
              <button class="ui facebook button" @click="login">
                <i class="facebook icon"></i>
                Log in with Facebook
              </button>
            </div>
          </div>
          <div class="six wide column large screen only">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'LoginPage',
    methods: {
      ...mapActions(['userLogin']),
      login: function () {
        window.FB.login(response => {
          if (response.status === 'connected') {
            this.userLogin(response)
          } else {
            console.log('Login failed')
          }
        }, { scope: 'public_profile, email' })
      }
    },
    mounted: function () {
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: '156642198301030',
          cookie: true,
          xfbml: true,
          version: 'v2.11'
        })
        window.FB.AppEvents.logPageView()
      };

      (function (d, s, id) {
        let js
        let fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) { return }
        js = d.createElement(s)
        js.id = id
        js.src = 'https://connect.facebook.net/en_US/sdk.js'
        fjs.parentNode.insertBefore(js, fjs)
      }(document, 'script', 'facebook-jssdk'))
    }
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
