<template>
    <!-- <div>
        <span>Title :</span><br>
        <InputText type="text" /><br>
        <span>Author :</span><br>
        <InputText type="text" /><br>
        <span>Description :</span><br>
        <Textarea v-model="value" :autoResize="true" rows="5" cols="30" /><br>
        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" />
        <image-upload-component />
         -->

    <form class="p-grid" @submit.prevent="onSubmit">
        <div>
    <div class="p-col">
      <!-- title -->
      <div class="p-field">
        <label class="p-d-block">Title</label><br>
        <InputText
          type="text"
          v-model="form.title" />
      </div>

      <!-- author -->
      <div class="p-field">
        <label class="p-d-block">Author</label><br>
        <InputText
          type="text"
          v-model="form.author" />
      </div>

      <!-- category -->
      <div class="p-field">
        aa {{ categories}}
        <label class="p-d-block">Category</label><br>
        <div v-for="category in categories" :key="category">
        {{ category.name }} - ID: {{ category['_id'] }}</div>
        <select  v-model="selectedCategory" >
        <option v-for="category in categories" :key="category">{{ category.name }}</option>
        </select>
<!--        <Dropdown  v-model="selectedCategory" :options="cities" optionLabel="name" optionValue="_id" placeholder="Select a Category"  />-->
      </div>

      <!-- description -->
      <div class="p-field">
        <label class="p-d-block">Description</label><br>
        <Textarea
          rows="5"
          cols="30"
          v-model="form.description" />
      </div>

      <button
        class="p-button-rounded p-button-success"
        type="submit"
        label="Add"
        icon="pi pi-plus"
        @click="addPhoto()">Submit </button>
        {{ this.photos }}

    </div>
    <div class="p-col">
        <image-upload-component @choose="photoSelected"/>
        <!-- <Message v-for="msg of messages" :severity="msg.severity" :key="msg.content">{{msg.content}}</Message> -->
    </div>
</div>
  </form>
    <!-- </div> -->
</template>
<script>
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
// import Dropdown from 'primevue/dropdown'
// import Message from 'primevue/message'
import ImageUploadComponent from '@/components/shared/ImageUpload.vue'

import { mapState } from 'vuex'

export default {
  components: {
    InputText,
    Textarea,
    // Dropdown,
    ImageUploadComponent
    // Message
  },
  methods: {
    photoSelected (cosTuBylo) {
      this.form.file = cosTuBylo
    },
    addPhoto () {
      // photos.push({title:form.title, author:form.author, description:form.description})
      const formData = new FormData()
      formData.append('title', this.form.title)
      formData.append('author', this.form.author)
      formData.append('description', this.form.description)
      formData.append('file', this.form.file)
      formData.append('category', this.selectedCategory)

      this.$store.dispatch('Photos/addPhoto', formData)
    }
  },
  computed: {
    categories () {
      return this.$store.state.Categories.categories
    },
    // ...mapState(['Categories/categories']),
    ...mapState(['Photos/photos'])
  },
  data: () => ({
    selectedCategory: null,
    cities: [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ],
    form: {
      title: '',
      author: '',
      description: '',
      category: '',
      file: null
    }
    // showAlert: () => {
    //   const isSuccess = false
    //   const isError = false
    //   if
    // },
    // messages: [
    //   { severity: 'success', content: 'Dynamic Success Message' },
    //   { severity: 'warn', content: 'Dynamic Warning Message' }
    // ]
  })

}
</script>
