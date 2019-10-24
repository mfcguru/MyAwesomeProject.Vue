import VueRouter from 'vue-router'
import AuthService from './core/auth.service'
import HomeComponent from './components/home/home.component'
import ContactComponent from './components/contact/contact.component'
import AboutComponent from './components/about/about.component'
import LoginComponent from './shared/login/login.component'
import RegisterComponent from './shared/register/register.component'
import NotFoundComponent from './shared/notfound/notfound.component'
import ListAuthorComponent from './components/author/list-author/list.author.component'
import AddAuthorComponent from './components/author/add-author/add.author.component'
import EditAuthorComponent from './components/author/edit-author/edit.author.component'
import DeleteAuthorComponent from './components/author/delete-author/delete.author.component'
import ListBookComponent from './components/book/list-book/list.book.component'
import AddBookComponent from './components/book/add-book/add.book.component'
import EditBookComponent from './components/book/edit-book/edit.book.component'
import DeleteBookComponent from './components/book/delete-book/delete.book.component'
import ListCategoryComponent from './components/category/list-category/list.category.component'
import AddCategoryComponent from './components/category/add-category/add.category.component'
import EditCategoryComponent from './components/category/edit-category/edit.category.component'
import DeleteCategoryComponent from './components/category/delete-category/delete.category.component'


const routes = [
  {
    path: '/',
    component: HomeComponent,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/contact',
    component: ContactComponent,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/about',
    component: AboutComponent,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    component: LoginComponent,
  },
  {
    path: '/register',
    component: RegisterComponent,
  },
	{
    path: '/authors',
    component: ListAuthorComponent,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/author/add',
    component: AddAuthorComponent,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/author/edit/:id',
    component: EditAuthorComponent,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/author/delete/:id',
    component: DeleteAuthorComponent,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/books',
    component: ListBookComponent,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/book/add',
    component: AddBookComponent,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/book/edit/:id',
    component: EditBookComponent,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/book/delete/:id',
    component: DeleteBookComponent,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/categories',
    component: ListCategoryComponent,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/category/add',
    component: AddCategoryComponent,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/category/edit/:id',
    component: EditCategoryComponent,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/category/delete/:id',
    component: DeleteCategoryComponent,
    meta: {
      requiresAuth: true,
    },
  },
  
  {
    path: '*',
    component: NotFoundComponent,
  },
]

const router = new VueRouter({ routes, mode: 'history' })

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!AuthService.isAuthenticated()) {
      return next('/login')
    }
  }

  next()
})

export default router
