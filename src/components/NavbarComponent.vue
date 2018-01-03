<template>
  <div class="ui container">
    <div class="ui container">
      <div class="ui pointing menu">
        <a class="active item">
          Home
        </a>
        <a class="item">
          My Timeline
        </a>
        <div class="right menu">
          <div class="item">
            <div class="ui transparent icon input">
              <input type="text" placeholder="Search...">
              <i class="search link icon"></i>
            </div>
          </div>
          <div class="item ui top pointing dropdown">
            <img class="ui avatar image" :src="userProfile.avatar" :alt="userProfile.name">
            {{ userProfile.name }}
            <div class="menu">
              <div class="item"><i class="edit icon"></i> Edit Profile</div>
              <div class="item" @click="addPhotoModal"><i class="camera retro icon"></i> Add Photo</div>
              <div class="item" @click="logout"><i class="sign out icon"></i> Log out</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /* global $ */
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'NavbarComponent',
    computed: {
      ...mapGetters(['userProfile'])
    },
    methods: {
      ...mapActions(['getUserProfile']),
      logout: function () {
        localStorage.removeItem('accesstoken')
        this.$router.push('/login')
      },
      addPhotoModal: function () {
        $('.ui.small.modal').modal('show')
      }
    },
    created: function () {
      this.getUserProfile()
      $(document).ready(function () {
        $('.item.ui.top.pointing.dropdown').dropdown({
          on: 'hover'
        })
      })
    }
  }
</script>

<style scoped>

</style>
