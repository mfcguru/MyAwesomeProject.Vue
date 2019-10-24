<template>
	<div class="container">
		<form @submit="handleSubmit($event)">
      <h2>Add Author</h2>
		<hr />
		<div class="form-group">
  <label>Author Name</label>
  <input v-model="model.authorName" type="text" class="form-control" required="" />
</div>
	
		<!-- __PROPERTY__ DETAIL/SUB-FORM (BEGIN) -->

<label>Book Authors</label>
<div class="form-group bg-warning p-3">
  <div class="row">
    <div class="col-9">
      <BookAuthorsDetail :model="model"
      @EventBookAuthorsDetail="EventBookAuthorsDetail" />
    </div>
    <div class="col-3">
      <BookAuthorsSubForm @EventBookAuthorsSubForm="EventBookAuthorsSubForm" />
    </div>
  </div>
</div>

<!-- __PROPERTY__ DETAIL/SUB-FORM (END) -->
		<AlertComponent v-if="showAlert" v-bind="alertInfo"></AlertComponent>
		<div class="form-group">
			<button type="submit" class="btn btn-dark btn-block">Submit</button>
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

import BookAuthorsDetail from '../book.author.detail'
import BookAuthorsSubForm  from '../book.author.subform'

		
export default {
			name: 'AddAuthorComponent',
  components: {
		AlertComponent,
		BookAuthorsDetail,
BookAuthorsSubForm,

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

  methods: {
		EventBookAuthorsDetail(item) { this.model.bookAuthors = this.model.bookAuthors.filter(o => o.bookId !== item.bookId) },
EventBookAuthorsSubForm(item) { this.model.bookAuthors.push(JSON.parse(JSON.stringify(item))) },

			handleSubmit(event) {
			event.preventDefault()
      this.showAlert = false
		let vm = this
		AuthorService.addAuthor(this.model)
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
