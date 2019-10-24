<template>
	<div class="container">
		<h2 class="pb-3">Home Page</h2>
		<table class="table table-condensed">
			<thead>
				<tr>
					<th scope="col"></th>
					<th scope="col">Component</th>
					<th scope="col">Service</th>
					<th scope="col">Route</th>
				</tr>
			</thead>
			<tbody>

				      <tr>
        <th scope="row">Author</th>
        <td>list-author</td>
        <td>author.service</td>
        <td>
          <router-link to="/authors">/authors</router-link>
        </td>
      </tr>
      <tr>
        <th scope="row"></th>
        <td>add-author</td>
        <td>author.service</td>
        <td>
          <router-link to="/author/add">/author/add</router-link>
        </td>
      </tr>
      <tr>
        <th scope="row"></th>
        <td>edit-author</td>
        <td>author.service</td>
        <td>
          <p>/author/edit/:id</p>
        </td>
      </tr>
      <tr>
        <th scope="row"></th>
        <td>delete-author</td>
        <td>author.service</td>
        <td>
          <p>/author/delete/:id</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Book</th>
        <td>list-book</td>
        <td>book.service</td>
        <td>
          <router-link to="/books">/books</router-link>
        </td>
      </tr>
      <tr>
        <th scope="row"></th>
        <td>add-book</td>
        <td>book.service</td>
        <td>
          <router-link to="/book/add">/book/add</router-link>
        </td>
      </tr>
      <tr>
        <th scope="row"></th>
        <td>edit-book</td>
        <td>book.service</td>
        <td>
          <p>/book/edit/:id</p>
        </td>
      </tr>
      <tr>
        <th scope="row"></th>
        <td>delete-book</td>
        <td>book.service</td>
        <td>
          <p>/book/delete/:id</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Category</th>
        <td>list-category</td>
        <td>category.service</td>
        <td>
          <router-link to="/categories">/categories</router-link>
        </td>
      </tr>
      <tr>
        <th scope="row"></th>
        <td>add-category</td>
        <td>category.service</td>
        <td>
          <router-link to="/category/add">/category/add</router-link>
        </td>
      </tr>
      <tr>
        <th scope="row"></th>
        <td>edit-category</td>
        <td>category.service</td>
        <td>
          <p>/category/edit/:id</p>
        </td>
      </tr>
      <tr>
        <th scope="row"></th>
        <td>delete-category</td>
        <td>category.service</td>
        <td>
          <p>/category/delete/:id</p>
        </td>
      </tr>


			</tbody>
		</table>
	</div>
</template>

<script>

export default {
  name: 'HomeComponent'
}
</script>

<style scoped>

</style>
