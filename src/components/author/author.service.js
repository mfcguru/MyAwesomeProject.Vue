import axios from 'axios'
import AuthService from '../../core/auth.service'

class AuthorService {
	token = AuthService.getToken()

	addAuthor = author => {
		const url = process.env.VUE_APP_HOST_URL + '/author'
		return axios.post(url, author, { headers: { Authorization: `Bearer ${this.token}` } })
	}

	editAuthor = (id, author) => {
		const url = process.env.VUE_APP_HOST_URL + '/author/' + id
		return axios.put(url, author, { headers: { Authorization: `Bearer ${this.token}` } })
	}

	deleteAuthor = id => {
		const url = process.env.VUE_APP_HOST_URL + '/author/' + id
		return axios.delete(url, { headers: { Authorization: `Bearer ${this.token}` } })
	}

	getAuthor = id => {
		const url = process.env.VUE_APP_HOST_URL + '/author/' + id
		return axios.get(url, { headers: { Authorization: `Bearer ${this.token}` } })
	}

	getAllAuthors = () => {
		const url = process.env.VUE_APP_HOST_URL + '/author'
		return axios.get(url, { headers: { Authorization: `Bearer ${this.token}` } })
	}
}

const authorService = new AuthorService()
export default authorService