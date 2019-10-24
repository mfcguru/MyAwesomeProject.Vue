<template>
	<div class="container">
		<AlertComponent v-if="showAlert" v-bind="errorResponse"></AlertComponent>
		<div class="row">
			<div class="col-md-6">
				<h2>Books</h2>
			</div>
			<div class="col-md-6">
				<span class="float-right pt-5">
					<router-link to="/book/add">Add New Book</router-link>
				</span>
			</div>
		</div>
		<div class="row">
			<table class="table table-condensed">
				<thead>
					<tr>
						<th scope="col">Book Name</th>
<th scope="col">Price</th>

						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="book in books" :key="book.bookId">
            <td>{{book.bookName}}</td>
<td>{{book.price}}</td>

					<td>
						<span class="float-right">
							<router-link :to="`/book/edit/${book.bookId}`">Edit</router-link> |&nbsp;
                <router-link :to="`/book/delete/${book.bookId}`">Delete</router-link>
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
		import BookService from '../book.service'
		
export default {
		name: 'ListBooksComponent',
components: {
		AlertComponent,
  },
  data() {
    return {
			books: null,
		showAlert: null,
      errorResponse: {error: null },
	  }
	},
  created() {
			this.showAlert = false
    let vm = this
		BookService.getAllBooks()
      .then(response => {
			vm.books = response.data
		})
      .catch(function(error) {
			vm.showAlert = true
        vm.errorResponse.error = error
      })
  },
}
</script>

	<style scoped></style>
