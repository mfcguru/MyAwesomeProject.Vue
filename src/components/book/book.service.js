import axios from 'axios'
import AuthService from '../../core/auth.service'

class BookService {
	token = AuthService.getToken()

	addBook = book => {
		const url = process.env.VUE_APP_HOST_URL + '/book'
		return axios.post(url, book, { headers: { Authorization: `Bearer ${this.token}` } })
	}

	editBook = (id, book) => {
		const url = process.env.VUE_APP_HOST_URL + '/book/' + id
		return axios.put(url, book, { headers: { Authorization: `Bearer ${this.token}` } })
	}

	deleteBook = id => {
		const url = process.env.VUE_APP_HOST_URL + '/book/' + id
		return axios.delete(url, { headers: { Authorization: `Bearer ${this.token}` } })
	}

	getBook = id => {
		const url = process.env.VUE_APP_HOST_URL + '/book/' + id
		return axios.get(url, { headers: { Authorization: `Bearer ${this.token}` } })
	}

	getAllBooks = () => {
		const url = process.env.VUE_APP_HOST_URL + '/book'
		return axios.get(url, { headers: { Authorization: `Bearer ${this.token}` } })
	}
}

const bookService = new BookService()
export default bookService