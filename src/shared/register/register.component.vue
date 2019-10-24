<template>
  <div>
    <div class="login-form">
      <form @submit="handleSubmit($event)">
        <h2 class="text-center">Register</h2>
        <div class="form-group">
          <input
            v-model="model.firstName"
            type="text"
            class="form-control"
            placeholder="First Name"
            required
          />
        </div>
        <div class="form-group">
          <input
            v-model="model.lastName"
            type="text"
            class="form-control"
            placeholder="Last Name"
            required
          />
        </div>
        <div class="form-group">
          <input
            v-model="model.username"
            type="text"
            class="form-control"
            placeholder="Username"
            required
          />
        </div>
        <div class="form-group">
          <input
            v-model="model.password"
            type="password"
            class="form-control"
            placeholder="Password"
            required
          />
        </div>
        <div class="form-group">
          <input
            v-model="passwordConfirmation"
            type="password"
            class="form-control"
            placeholder="Confirm Password"
            required
          />
        </div>
        <AlertComponent v-if="showAlert" v-bind="alertInfo"></AlertComponent>
        <div class="form-group">
          <button type="submit" class="btn btn-dark btn-block">
            Register
          </button>
        </div>
      </form>
      <p class="text-center">Already have an account?</p>
      <p class="text-center">
        <router-link to="/login">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import AuthService from '../../core/auth.service'
import AlertComponent from '../alert/alert.component'

export default {
  path: '/register',
  name: 'RegisterComponent',
  components: {
    AlertComponent,
  },
  data() {
    return {
      showAlert: null,
      alertInfo: null,
      model: {
        firstName: null,
        lastName: null,
        username: null,
        password: null,
      },
      passwordConfirmation: null,
    }
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault()
      this.showAlert = false
      if (
        this.model.firstName === null ||
        this.model.lastName === null ||
        this.model.username === null ||
        this.model.password === null ||
        this.passwordConfirmation === null
      ) {
        return
      }
      if (this.model.password !== this.passwordConfirmation) {
        this.showAlert = true
        this.alertInfo = {
          success: false,
          message: 'Password and password confirmation do not match',
        }
        return
      }
      let vm = this
      AuthService.register(this.model)
        .then(() => {
          vm.showAlert = true
          vm.alertInfo = { success: true }
        })
        .catch(function(error) {
          vm.showAlert = true
          vm.alertInfo = { success: false, error }
        })
    },
  },
}
</script>

<style scoped>
.login-form {
  width: 340px;
  margin: 50px auto;
}
.login-form form {
  margin-bottom: 15px;
  background: #f7f7f7;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
.login-form h2 {
  margin: 0 0 15px;
}
.form-control,
.btn {
  min-height: 38px;
  border-radius: 2px;
}
.btn {
  font-size: 15px;
  font-weight: bold;
}
</style>
