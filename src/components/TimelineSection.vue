<template>
  <div class="ui container">
    <div class="ui three cards">
      <div class="ui card" v-for="(photo, index) in photos" :key="index">
        <div class="content">
          <div class="right floated meta">{{ new Date(photo.uploadedAt).toDateString() }}</div>
          <img class="ui avatar image" :src="photo.uploader.avatar"> {{ photo.uploader.name }}
        </div>
        <div class="image">
          <img :src="photo.photoUrl" alt="">
        </div>
        <div class="content">
          <span class="right floated">
            <i class="heart outline like icon"></i>
            {{ photo.likes.length }} likes
          </span>
          <i class="comment icon"></i>
          {{ photo.comments.length }} comments
        </div>
        <div class="extra content">
          <div class="ui large transparent left icon input">
            <i class="heart outline icon"></i>
            <input type="text" placeholder="Add Comment...">
          </div>
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
      ...mapGetters(['photos'])
    },
    methods: {
      ...mapActions(['getAllPhotos'])
    },
    created: function () {
      this.getAllPhotos()
    }
  }
</script>

<style>

</style>
