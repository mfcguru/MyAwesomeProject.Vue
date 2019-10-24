<template>
	<div class="container">
		<form @submit="handleSubmit($event)">
      <h2>Delete Author</h2>
		<hr />
		<div class="form-group">
  <label>Author Name</label>
  <input v-model="model.authorName" type="text" class="form-control" required="" />
</div>
	
		<AlertComponent v-if="showAlert" v-bind="alertInfo"></AlertComponent>
		<div class="form-group">
			<button type="submit" class="btn btn-dark btn-block">Delete</button>
		</div>
    </form>
	<p>
		<router-link to="/authors">Back to List</router-link>
	</p>
  </div>
</template >

	<script>
		import AlertComponent from '../../../shared/alert/alert.component'
		import AuthorService from '../author.service'

		
export default {
			name: 'DeleteAuthorComponent',
  components: {
			AlertComponent,
  },
  data() {
    return {
		showAlert: false,
	alertInfo: null,
      model: {
		authorName: '',
	bookAuthors: [],
	},

	}
  },
  created() {
			let vm = this
		AuthorService.getAuthor(this.$route.params.id)
      .then((response) => {
		vm.model = response.data
		
  })
      .catch(function(error) {
		vm.showAlert = true
          vm.alertInfo = {success: false, error }
return
})

},
  methods: {
			handleSubmit(event) {
			event.preventDefault()
      this.showAlert = false
	  let vm = this
	  AuthorService.deleteAuthor(this.$route.params.id)
        .then(() => {
		vm.showAlert = true
          vm.alertInfo = {success: true }
  })
        .catch(function(error) {
		vm.showAlert = true
          vm.alertInfo = {success: false, error }
  })
},
},
}
</script>

	<style scoped></style>
