<template>
  <div v-if="isAuthenticated.status === true">
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <A class="navbar-brand" href="/">Jabit!</A>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="to" class="nav-link" @click.native="handleLogout()"
              >Log out</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import AuthService from '../../core/auth.service'

export default {
  name: 'NavbarComponent',
  props: {
    isAuthenticated: null,
  },
  methods: {
    handleLogout: function() {
      AuthService.logout()
      this.$emit('EventLoggedOut')
    },
  },
}
</script>

<style scoped></style>
