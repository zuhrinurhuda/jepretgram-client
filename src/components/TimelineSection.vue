<template>
  <div class="ui grid container">
    <div class="sixteen wide mobile eight wide tablet four wide computer column" v-for="(photo, index) in photos" :key="index">
      <div class="ui fluid card">
        <div class="content">
          <div class="right floated meta">
            <a class="ui blue label" v-if="!photo.uploader.followers.length" @click="follow(photo.uploader._id)">Follow</a>
            <a class="ui basic label" v-else @click="follow(photo.uploader._id)">Unfollow</a>
            </div>
          <img class="ui avatar image" :src="photo.uploader.avatar"> {{ photo.uploader.name }}
        </div>
        <div class="image">
          <img :src="photo.photoUrl" :alt="photo.caption">
        </div>
        <div class="content">
          <span class="right floated">
            <i class="heart outline like icon" v-if="!photo.likes.length" @click="like(photo._id)"></i>
            <i class="heart red icon" v-else @click="like(photo._id)"></i>
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
      like: function (id) {
        this.submitLikePhoto(id)
      },
      follow: function (id) {
        this.submitFollowUser(id)
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
