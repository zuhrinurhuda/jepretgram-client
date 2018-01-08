<template>
  <div class="ui grid container">
    <div class="row">
      <div class="six wide computer only column">
        <img class="ui small middle aligned right floated circular image" :src="userProfile.avatar" :alt="userProfile.name">
      </div>
      <div class="sixteen wide mobile eight wide tablet six wide computer column">
        <h2 class="ui header">{{ userProfile.name }}</h2>
        <div class="ui relaxed horizontal list">
          <div class="item" v-if="userPhotos">
            <p class="ui center aligned header">{{ userPhotos.length }}</p>
            <p class="center aligned">posts</p>
          </div>
          <div class="item" v-if="userProfile.followers">
            <p class="ui center aligned header">{{ userProfile.followers.length }}</p>
            <p class="center aligned">followers</p>
          </div>
          <div class="item" v-if="userProfile.following">
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
      <div class="ui special cards">
        <div class="ui fluid card">
          <div class="blurring dimmable image">
            <div class="ui dimmer">
              <div class="content">
                <a class="center" @click="viewDetail(photo)">
                  <i class="big zoom icon"></i>
                </a>
              </div>
            </div>
            <img :src="photo.photoUrl" :alt="photo.caption">
          </div>
          <div class="content">
            <span class="right floated" v-if="photo.likes">
              <i class="heart outline like icon" v-if="!photo.likes.length"></i>
              <i class="heart red icon" v-else></i>
              {{ photo.likes.length }} likes
            </span>
            <span v-if="photo.comments">
              <i class="comment outline icon" v-if="!photo.comments.length"></i>
              <i class="comment icon" v-else></i>
              {{ photo.comments.length }} comments
            </span>
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
        'getUserPhotos',
        'getPhotoDetail'
      ]),
      viewDetail: function (photo) {
        this.getPhotoDetail(photo)
        $('#photoDetail').modal('show')
      }
    },
    created: function () {
    },
    mounted: function () {
      this.getUserProfile()
      this.getUserPhotos()
      $('.ui.special.cards .image').dimmer({
        on: 'hover'
      })
    },
    updated: function () {
      $('.ui.special.cards .image').dimmer({
        on: 'hover'
      })
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
