<template>
  <div class="ui grid container">
    <div class="row">
      <div class="six wide computer only column">
        <img class="ui small middle aligned right floated circular image" :src="userProfile.avatar" :alt="userProfile.name">
      </div>
      <div class="sixteen wide mobile eight wide tablet ten wide computer column">
        <h2 class="ui header">{{ userProfile.name }}</h2>
        <div class="ui relaxed horizontal list">
          <div class="item">
            <p class="ui center aligned header">{{ userPhotos.length }}</p>
            <p class="center aligned">posts</p>
          </div>
          <div class="item">
            <p class="ui center aligned header">{{ userProfile.followers.length }}</p>
            <p class="center aligned">followers</p>
          </div>
          <div class="item">
            <p class="ui center aligned header">{{ userProfile.following.length }}</p>
            <p class="center aligned">following</p>
          </div>
        </div>
        <div>
          <p>Please, fill your biodata by editing profile.</p>
        </div>
      </div>
    </div>
    <div class="sixteen wide mobile eight wide tablet four wide computer column" v-for="(photo, index) in userPhotos" :key="index">
      <div class="ui fluid card">
        <div class="content">
          <div class="right floated meta">
            <a class="ui blue label">Follow</a>
            </div>
          <img class="ui avatar image" :src="photo.uploader.avatar"> {{ photo.uploader.name }}
        </div>
        <div class="image">
          <img :src="photo.photoUrl" :alt="photo.caption">
        </div>
        <div class="content">
          <span class="right floated">
            <i class="heart outline like icon"></i>
            {{ photo.likes.length }} likes
          </span>
          <i class="comment icon"></i>
          {{ photo.comments.length }} comments
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'ProfileSection',
    computed: {
      ...mapGetters([
        'userProfile',
        'userPhotos'
      ])
    },
    methods: {
      ...mapActions([
        'getUserProfile',
        'getUserPhotos'
      ])
    },
    created: function () {
      this.getUserProfile()
      this.getUserPhotos()
    }
  }
</script>

<style scoped>
  .ui.grid.container {
    margin: 1rem;
  }

  .ui.relaxed.horizontal.list {
    padding-bottom: 14px;
  }

  p {
    font-size: 16px;
  }
</style>
