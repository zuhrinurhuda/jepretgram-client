<template>
  <div>
    <div id="addPhoto" class="ui small modal">
      <i class="close icon"></i>
      <div class="header">
        Profile Picture
      </div>
      <div class="scrolling content">
        <div class="ui form">
          <div class="field">
            <div v-if="!thumbnail">
              <label>Select a photo</label>
              <input type="file" accept="image/*" @change="onFileChange">
            </div>
            <div v-else>
              <i class="big remove icon" @click="removePhoto"></i>
              <img class="ui centered fit image" :src="thumbnail" alt="">
            </div>
          </div>
          <div class="two fields">
            <div class="field">
              <label>Caption</label>
              <input type="text" placeholder="say something about this photo" v-model="caption">
            </div>
            <div class="field">
              <label>Hashtags</label>
              <input type="text" placeholder="separate hashtags with spaces" v-model="hashtags">
            </div>
          </div>
        </div>
      </div>
      <div class="actions">
        <div class="ui black deny button">
          Cancel
        </div>
        <div class="ui positive button" @click="uploadPhoto">
          Submit
        </div>
      </div>
    </div>

    <div id="photoDetail" class="ui large modal">
      <i class="close icon"></i>
      <div class="ui grid container">
        <div class="ten wide column" v-if="photoDetail.uploader">
          <img class="ui image" :src="photoDetail.photoUrl" :alt="photoDetail.uploader.name">
        </div>
        <div class="six wide column">
          <div class="header">
            <div class="ui list">
              <div class="item" v-if="photoDetail.uploader">
                <img class="ui avatar image" :src="photoDetail.uploader.avatar" :alt="photoDetail.uploader.name">
                <div class="content">
                  <a href="" class="header">{{ photoDetail.uploader.name }}</a>
                  <div class="description">Post on {{ new Date(photoDetail.uploadedAt).toDateString() }}</div>
                </div>
                <div class="right floated content" v-if="photoDetail.uploader.followers" @click="follow(photoDetail)">
                  <a class="ui blue label" v-if="!photoDetail.uploader.followers.length">Follow</a>
                  <a class="ui basic label" v-else>Unfollow</a>
                </div>
              </div>
            </div>
          </div>
          <div class="ui divider"></div>
          <div class="scrolling content">
            <div class="caption" v-if="photoDetail.uploader">
              <p><span class="ui tiny header">{{ photoDetail.uploader.name }}</span> {{ photoDetail.caption }}</p>
              <a href="">{{ hashtag }}</a>
            </div>
            <div class="comments">
              <p></p>
            </div>
          </div>
          <div class="ui divider"></div>
          <div class="extra content">
            <div class="ui large transparent right fluid icon input">
              <i class="send icon"></i>
              <input type="text" placeholder="Add a comment...">
            </div>
          </div>
        </div>
      </div>
        <!-- {{ photoDetail }} -->
    </div>
  </div>
</template>

<script>
  /* global $ */
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'ModalComponent',
    data: function () {
      return {
        thumbnail: null,
        photo: null,
        caption: null,
        hashtags: null
      }
    },
    computed: {
      ...mapGetters(['photoDetail']),
      hashtag: function () {
        let strHashtag = ''
        this.photoDetail.hashtags.forEach(hashtag => {
          console.log(hashtag)
          strHashtag += ' ' + hashtag
        })

        return strHashtag
      }
    },
    methods: {
      ...mapActions([
        'uploadNewPhoto',
        'submitFollowUser'
      ]),
      onFileChange: function (event) {
        let files = event.target.files || event.dataTransfer.files
        if (!files.length) return
        this.createThumbnail(files[0])
        this.photo = files[0]
      },
      createThumbnail: function (file) {
        let fileReader = new FileReader()
        fileReader.onload = (event) => {
          this.thumbnail = event.target.result
        }
        fileReader.readAsDataURL(file)
      },
      removePhoto: function () {
        this.thumbnail = null
      },
      uploadPhoto: function () {
        let formData = new FormData()
        formData.append('photo', this.photo)
        formData.append('caption', this.caption)
        formData.append('hashtags', this.hashtags)
        this.uploadNewPhoto(formData)
      },
      follow: function (photo) {
        this.submitFollowUser(photo)
      }
    },
    updated: function () {
      $(document).ready(function () {
        $('#addPhoto').modal('refresh')
        $('#photoDetail').modal('refresh')
      })
    }
  }
</script>

<style scoped>
  .fit {
    max-width: 668px;
    max-height: 668px;
  }

  .big.remove.icon {
    position: absolute;
    z-index: 999;
    left: 638px;
  }

  /* .ui.grid>.column:not(.row) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  } */

  .ui.grid {
    margin-top: 1rem;
    margin-bottom: 1rem;
}
</style>
