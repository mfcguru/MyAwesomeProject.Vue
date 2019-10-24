<template>
  <div class="container p-3" style="height:100%; background:#e3f2fd">
    <table class="table">
      <thead>
        <tr>
          <th>Book Id</th>

          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in model.bookAuthors" :value:="item" :key="item.bookId">
          <td>{{item.bookName}}</td>

          <td>
            <button @click="handleClickEvent($event, item)">X</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'BookAuthorsDetail',
  props: ["model"],
  methods: {
    handleClickEvent(e, item) {
      e.preventDefault()
      this.$emit('EventBookAuthorsDetail', item)      
    },
  },
}
</script>

<style scoped></style>
