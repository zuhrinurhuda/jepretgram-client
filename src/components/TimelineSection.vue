<template>
  <div class="ui grid container">
    <div class="sixteen wide mobile eight wide tablet four wide computer column" v-for="(photo, index) in photos" :key="index">
      <div class="ui special cards">
        <div class="ui fluid card">
          <div class="content">
            <div class="right floated meta" v-if="(photo.uploader._id != userProfile._id) && photo.uploader.followers" @click="follow(photo)">
              <a class="ui blue label" v-if="!photo.uploader.followers.length">Follow</a>
              <a class="ui basic label" v-else>Unfollow</a>
            </div>
            <img class="ui avatar image" :src="photo.uploader.avatar"> {{ photo.uploader.name }}
          </div>
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
            <span class="right floated" v-if="photo.likes" @click="like(photo)">
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
    name: 'TimelineSection',
    computed: {
      ...mapGetters([
        'photos',
        'userProfile'
      ])
    },
    methods: {
      ...mapActions([
        'getUserProfile',
        'getAllPhotos',
        'submitLikePhoto',
        'submitFollowUser',
        'getPhotoDetail'
      ]),
      like: function (photo) {
        if (photo.uploader._id === this.userProfile._id) {
          // nothing
        } else {
          this.submitLikePhoto(photo)
        }
      },
      follow: function (photo) {
        if (photo.uploader._id === this.userProfile._id) {
          // nothing
        } else {
          this.submitFollowUser(photo)
        }
      },
      viewDetail: function (photo) {
        this.getPhotoDetail(photo)
        $('#photoDetail').modal('show')
      }
    },
    created: function () {
    },
    mounted: function () {
      this.getUserProfile()
      this.getAllPhotos()
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
</style>
