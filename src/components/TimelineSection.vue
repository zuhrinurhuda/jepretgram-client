<template>
  <div class="ui grid container">
    <div class="sixteen wide mobile eight wide tablet four wide computer column" v-for="(photo, index) in photos" :key="index">
      <div class="ui fluid card">
        <div class="content">
          <div class="right floated meta" v-if="photo.uploader.followers">
            <a class="ui blue label" v-if="!photo.uploader.followers.length" @click="follow(photo)">Follow</a>
            <a class="ui basic label" v-else @click="follow(photo)">Unfollow</a>
          </div>
          <img class="ui avatar image" :src="photo.uploader.avatar"> {{ photo.uploader.name }}
        </div>
        <div class="image">
          <img :src="photo.photoUrl" :alt="photo.caption">
        </div>
        <div class="content">
          <span class="right floated" v-if="photo.likes">
            <i class="heart outline like icon" v-if="!photo.likes.length" @click="like(photo)"></i>
            <i class="heart red icon" v-else @click="like(photo)"></i>
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
    name: 'TimelineSection',
    computed: {
      ...mapGetters([
        // 'users',
        'photos'
      ])
    },
    methods: {
      ...mapActions([
        // 'getAllUsers',
        'getAllPhotos',
        'submitLikePhoto',
        'submitFollowUser'
      ]),
      like: function (photo) {
        // console.log(photo)
        this.submitLikePhoto(photo)
      },
      follow: function (photo) {
        this.submitFollowUser(photo)
      }
    },
    created: function () {
      // this.getAllUsers()
      this.getAllPhotos()
    }
    // ,
    // updated: function () {
    //   this.getAllPhotos()
    // }
  }
</script>

<style scoped>
  .ui.grid.container {
    margin: 1rem;
  }
</style>
