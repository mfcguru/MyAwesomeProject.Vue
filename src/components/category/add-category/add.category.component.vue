<template>
	<div class="container">
		<form @submit="handleSubmit($event)">
      <h2>Add Category</h2>
		<hr />
		<div class="form-group">
  <label>Category Name</label>
  <input v-model="model.categoryName" type="text" class="form-control" required="" />
</div>
		
		<AlertComponent v-if="showAlert" v-bind="alertInfo"></AlertComponent>
		<div class="form-group">
			<button type="submit" class="btn btn-dark btn-block">Submit</button>
		</div>
    </form>
	<p>
		<router-link to="/categories">Back to List</router-link>
	</p>
  </div>
</template >

	<script>
		import AlertComponent from '../../../shared/alert/alert.component'
		import CategoryService from '../category.service'


		
export default {
			name: 'AddCategoryComponent',
  components: {
		AlertComponent,
		
  },
  data() {
    return {
			showAlert: false,
		alertInfo: null,
      model: {
		categoryName: '',
	},

  }
},

  methods: {
		
			handleSubmit(event) {
			event.preventDefault()
      this.showAlert = false
		let vm = this
		CategoryService.addCategory(this.model)
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
