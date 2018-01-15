<template>
  <div class="ui container">
    <div class="ui stackable pointing menu">
      <router-link class="item" to="/">Home</router-link>
      <router-link class="item" to="/profile">My Profile</router-link>
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
        this.$router.replace('/login')
      },
      addPhotoModal: function () {
        $('#addPhoto').modal('show')
      }
    },
    mounted: function () {
      this.getUserProfile()
      $('.item.ui.top.pointing.dropdown').dropdown({
        on: 'hover'
      })
    }
  }
</script>

<style scoped>
  .ui.container {
    padding-top: 1rem;
  }
</style>
