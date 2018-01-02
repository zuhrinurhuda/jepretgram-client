<template>
  <div class="ui small modal">
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
            <label>Hashtag</label>
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
</template>

<script>
  /* global $ */
  import { mapActions } from 'vuex'
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
    methods: {
      ...mapActions(['uploadNewPhoto']),
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
      }
    },
    updated: function () {
      $(document).ready(function () {
        $('.ui.small.modal').modal('refresh')
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
</style>
