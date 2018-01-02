<template>
  <div class="ui small modal">
    <i class="close icon"></i>
    <div class="header">
      Profile Picture
    </div>
    <div class="scrolling content">
      <div class="ui form">
        <div class="field">
          <div v-if="!image">
            <label>Select an image</label>
            <input type="file" @change="onFileChange">
          </div>
          <div v-else>
            <i class="big remove icon" @click="removeImage"></i>
            <img class="ui centered fit image" :src="image" alt="">
          </div>
        </div>
        <div class="two fields">
          <div class="field">
            <label>Caption</label>
            <input type="text" placeholder="say something about this photo" v-model="newPhotoData.caption">
          </div>
          <div class="field">
            <label>Hashtag</label>
            <input type="text" placeholder="separate hashtags with spaces" v-model="newPhotoData.hashtags">
          </div>
        </div>
      </div>
    </div>
    <div class="actions">
      <div class="ui black deny button">
        Cancel
      </div>
      <div class="ui positive button">
        Submit
      </div>
    </div>
  </div>
</template>

<script>
  /* global $ */
  export default {
    name: 'ModalComponent',
    data: function () {
      return {
        image: null,
        newPhotoData: {
          caption: null,
          hashtags: null
        }
      }
    },
    methods: {
      onFileChange: function (event) {
        let files = event.target.files || event.dataTransfer.files
        if (!files.length) return
        this.createImage(files[0])
      },
      createImage: function (file) {
        let reader = new FileReader()
        reader.onload = (event) => {
          this.image = event.target.result
        }
        reader.readAsDataURL(file)
      },
      removeImage: function (event) {
        this.image = null
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
