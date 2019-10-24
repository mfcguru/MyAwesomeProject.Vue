<template>
  <div id="app">
	  <NavbarComponent v-bind="{ isAuthenticated }" @EventLoggedOut="EventLoggedOut"></NavbarComponent>
    <div class="container">
      <router-view @EventLoggedIn="EventLoggedIn" />
    </div>
  </div>
</template>

<script>
import AuthService from './core/auth.service'
import NavbarComponent from './shared/navbar/navbar.component'
import router from './router'

export default {
  name: 'app',
  data() {
    return {
      isAuthenticated: {
        status: false,
      },
    }
  },
  created() {
    this.isAuthenticated.status = AuthService.isAuthenticated()
  },
  methods: {
    EventLoggedIn() {
      this.isAuthenticated.status = true
      router.push({ path: '/' })
    },
    EventLoggedOut() {
      this.isAuthenticated.status = false
      router.push({ path: '/login' })
    }
  },
  components: {
    NavbarComponent,
  },
}
</script>
