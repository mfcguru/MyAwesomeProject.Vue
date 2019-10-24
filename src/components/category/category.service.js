import axios from 'axios'
import AuthService from '../../core/auth.service'

class CategoryService {
	token = AuthService.getToken()

	addCategory = category => {
		const url = process.env.VUE_APP_HOST_URL + '/category'
		return axios.post(url, category, { headers: { Authorization: `Bearer ${this.token}` } })
	}

	editCategory = (id, category) => {
		const url = process.env.VUE_APP_HOST_URL + '/category/' + id
		return axios.put(url, category, { headers: { Authorization: `Bearer ${this.token}` } })
	}

	deleteCategory = id => {
		const url = process.env.VUE_APP_HOST_URL + '/category/' + id
		return axios.delete(url, { headers: { Authorization: `Bearer ${this.token}` } })
	}

	getCategory = id => {
		const url = process.env.VUE_APP_HOST_URL + '/category/' + id
		return axios.get(url, { headers: { Authorization: `Bearer ${this.token}` } })
	}

	getAllCategories = () => {
		const url = process.env.VUE_APP_HOST_URL + '/category'
		return axios.get(url, { headers: { Authorization: `Bearer ${this.token}` } })
	}
}

const categoryService = new CategoryService()
export default categoryService