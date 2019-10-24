<template>
	<div class="container">
		<AlertComponent v-if="showAlert" v-bind="errorResponse"></AlertComponent>
		<div class="row">
			<div class="col-md-6">
				<h2>Categories</h2>
			</div>
			<div class="col-md-6">
				<span class="float-right pt-5">
					<router-link to="/category/add">Add New Category</router-link>
				</span>
			</div>
		</div>
		<div class="row">
			<table class="table table-condensed">
				<thead>
					<tr>
						<th scope="col">Category Name</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="category in categories" :key="category.categoryId">
            <td>{{category.categoryName}}</td>
					<td>
						<span class="float-right">
							<router-link :to="`/category/edit/${category.categoryId}`">Edit</router-link> |&nbsp;
                <router-link :to="`/category/delete/${category.categoryId}`">Delete</router-link>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div >
	<router-link to="/">Back to Home</router-link>
  </div >
</template >

	<script>
	import AlertComponent from '../../../shared/alert/alert.component'
		import CategoryService from '../category.service'
		
export default {
		name: 'ListCategoriesComponent',
components: {
		AlertComponent,
  },
  data() {
    return {
			categories: null,
		showAlert: null,
      errorResponse: {error: null },
	  }
	},
  created() {
			this.showAlert = false
    let vm = this
		CategoryService.getAllCategories()
      .then(response => {
			vm.categories = response.data
		})
      .catch(function(error) {
			vm.showAlert = true
        vm.errorResponse.error = error
      })
  },
}
</script>

	<style scoped></style>
