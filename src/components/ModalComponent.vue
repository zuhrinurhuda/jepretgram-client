<template>
  <div>
    <div id="addPhoto" class="ui small modal">
      <i class="close icon"></i>
      <div class="header">
        Upload photo
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
              <div class="ui centered fluid image">
                <img :src="thumbnail" alt="">
              </div>
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
      <div class="ui stackable grid container">
        <div class="ten wide column">
          <div class="ui centered fluid image">
            <img :src="photoDetail.photoUrl" alt="">
          </div>
        </div>
        <div class="six wide column">
          <div class="header">
            <div class="ui list">
              <div class="item" v-if="photoDetail.uploader">
                <img class="ui avatar image" :src="photoDetail.uploader.avatar" alt="">
                <div class="content" v-if="photoDetail.uploader">
                  <a href="" class="header">{{ photoDetail.uploader.name }}</a>
                  <div class="description">Post on {{ new Date(photoDetail.uploadedAt).toDateString() }}</div>
                </div>
                <div class="right floated content" v-if="photoDetail.uploader._id != userProfile._id" @click="follow(photoDetail)">
                  <a class="ui blue label" v-if="!photoDetail.uploader.followers.length">Follow</a>
                  <a class="ui basic label" v-else>Unfollow</a>
                </div>
              </div>
            </div>
          </div>
          <div class="ui divider"></div>
          <div class="scrolling content">
            <div class="caption" v-if="photoDetail.uploader">
              <p>
                <span class="ui tiny header">{{ photoDetail.uploader.name }}</span> 
                {{ photoDetail.caption }}
                <br>
                <a href="">{{ hashtag }}</a>
              </p>
            </div>
            <div class="comments" v-if="photoDetail.comments">
              <p v-for="(comment, index) in photoDetail.comments" :key="index">
                <span class="ui tiny header" v-if="comment.user">{{ comment.user.name }}</span> 
                {{ comment.comment }}
              </p>
            </div>
          </div>
          <div class="ui divider"></div>
          <div class="extra content">
            <div class="ui large transparent right fluid icon input">
              <i class="send link icon" @click="addComment(photoDetail)"></i>
              <input type="text" placeholder="Add a comment..." v-model="comment" @keyup.enter="addComment(photoDetail)">
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
    name: 'ModalComponent',
    data: function () {
      return {
        thumbnail: null,
        photo: null,
        caption: null,
        hashtags: null,
        comment: null
      }
    },
    computed: {
      ...mapGetters([
        'photoDetail',
        'userProfile'
      ]),
      hashtag: function () {
        let strHashtag = ''
        this.photoDetail.hashtags.forEach(hashtag => {
          strHashtag += ' ' + hashtag
        })
        return strHashtag
      }
    },
    methods: {
      ...mapActions([
        'uploadNewPhoto',
        'submitFollowUser',
        'submitComment'
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
      resetForm: function () {
        this.thumbnail = null
        this.photo = null
        this.caption = null
        this.hashtags = null
      },
      uploadPhoto: function () {
        let formData = new FormData()
        formData.append('photo', this.photo)
        formData.append('caption', this.caption)
        formData.append('hashtags', this.hashtags)
        this.uploadNewPhoto(formData)
        this.resetForm()
      },
      follow: function (photoDetail) {
        this.submitFollowUser(photoDetail)
      },
      addComment: function (photoDetail) {
        let payload = {
          photoDetail: photoDetail,
          comment: this.comment
        }
        this.submitComment(payload)
        this.comment = null
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
  .big.remove.icon {
    position: absolute;
    z-index: 999;
    left: 638px;
  }

  .caption, .comments p {
    margin: 0 0 0.5em;
  }

  .ui.grid {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
</style>
