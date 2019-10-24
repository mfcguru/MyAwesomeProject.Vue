<template>
	<div class="container">
		<AlertComponent v-if="showAlert" v-bind="errorResponse"></AlertComponent>
		<div class="row">
			<div class="col-md-6">
				<h2>Authors</h2>
			</div>
			<div class="col-md-6">
				<span class="float-right pt-5">
					<router-link to="/author/add">Add New Author</router-link>
				</span>
			</div>
		</div>
		<div class="row">
			<table class="table table-condensed">
				<thead>
					<tr>
						<th scope="col">Author Name</th>

						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="author in authors" :key="author.authorId">
            <td>{{author.authorName}}</td>

					<td>
						<span class="float-right">
							<router-link :to="`/author/edit/${author.authorId}`">Edit</router-link> |&nbsp;
                <router-link :to="`/author/delete/${author.authorId}`">Delete</router-link>
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
		import AuthorService from '../author.service'
		
export default {
		name: 'ListAuthorsComponent',
components: {
		AlertComponent,
  },
  data() {
    return {
			authors: null,
		showAlert: null,
      errorResponse: {error: null },
	  }
	},
  created() {
			this.showAlert = false
    let vm = this
		AuthorService.getAllAuthors()
      .then(response => {
			vm.authors = response.data
		})
      .catch(function(error) {
			vm.showAlert = true
        vm.errorResponse.error = error
      })
  },
}
</script>

	<style scoped></style>
