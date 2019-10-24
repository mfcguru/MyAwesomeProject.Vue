<template>
  <div>
    <label>Book</label>
    <select v-model="model.book" class="form-control">
      <option disabled value=""></option>
      <option
        v-for="item in bookSelectOptions"
        :value="item"
        :key="item.bookId"
      >
        {{ item.bookName }}
      </option>
    </select>
    
    <AlertComponent v-if="showAlert" v-bind="alertInfo"></AlertComponent>
    <br />
    <button class="btn btn-primary btn-block" @click="addItem($event)">
      Add
    </button>
  </div>
</template>

<script>
import AlertComponent from '../../shared/alert/alert.component'
import BookService from '../book/book.service'

export default {
  name: 'BookAuthorsSubForm',
  components: {
    AlertComponent,
  },
  data() {
    return {
      showAlert: null,
      alertInfo: null,
      model: {
        book: null,
        
      },
      bookSelectOptions: null,
    }
  },
  created() {
    this.showAlert = false
    let vm = this
    BookService
      .getAllBooks()
      .then(response => {
        vm.bookSelectOptions = response.data
      })
      .catch(function(error) {
        vm.showAlert = true
        vm.alertInfo = { success: false, error }
      })
  },
  methods: {
    addItem(e) {
      e.preventDefault()
      this.model.bookId = this.model.book.bookId
      this.model.bookName = this.model.book.bookName
      this.$emit('EventBookAuthorsSubForm', this.model)
    },
  },
}
</script>

<style scoped></style>
