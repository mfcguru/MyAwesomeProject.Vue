<template>
	<div class="container">
		<form @submit="handleSubmit($event)">
      <h2>Add Book</h2>
		<hr />
		<div class="form-group">
  <label>Book Name</label>
  <input v-model="model.bookName" type="text" class="form-control" required="" />
</div>
	<div class="form-group">
  <label>Price</label>
  <input v-model="model.price" type="number" class="form-control" required="" />
</div>
	<div class="form-group">
  <label>Category</label>
  <select v-model="model.categoryId" class="form-control">
    <option disabled="" value=""></option>
    <option
      v-for="category in categories"
      :value="category.categoryId"
      :key="category.categoryId"
          >{{ category.categoryName }}</option>
  </select>
</div>
		
		<AlertComponent v-if="showAlert" v-bind="alertInfo"></AlertComponent>
		<div class="form-group">
			<button type="submit" class="btn btn-dark btn-block">Submit</button>
		</div>
    </form>
	<p>
		<router-link to="/books">Back to List</router-link>
	</p>
  </div>
</template >

	<script>
		import AlertComponent from '../../../shared/alert/alert.component'
		import BookService from '../book.service'
import CategoryService from '../../category/category.service'


		
export default {
			name: 'AddBookComponent',
  components: {
		AlertComponent,
		
  },
  data() {
    return {
			showAlert: false,
		alertInfo: null,
      model: {
		bookName: '',
	price: 0,
	categoryId: '',

	},
categories: null,

  }
},

									created() {
										let vm = this
										    CategoryService
      .getAllCategories()
      .then(response => {
        vm.categories = response.data
      })
      .catch(function(error) {
        vm.showAlert = true
        vm.alertInfo = { success: false, error }
      })

									},
								
  methods: {
		
			handleSubmit(event) {
			event.preventDefault()
      this.showAlert = false
		let vm = this
		BookService.addBook(this.model)
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
