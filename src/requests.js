const r = require('axios');
const SERVER_URL = 'http://mec-api.jfarellano.xyz/'

function getHeaders() {
  return {headers: {"Authorization": 'Token token=' + localStorage.getItem('secret')}}
}   

export default {
	variable: {
		URL: SERVER_URL
	},
	session: {
		login: (body) => {
			return r.post(SERVER_URL + '/sessions', body)
		},
		logout: () => {
			return r.delete(SERVER_URL + '/sessions', getHeaders())
		}
	},
	carousel:{
		index: () => {
			return r.get(SERVER_URL + '/carousels')
		},
		create: (body) => {
			return r.post(SERVER_URL + '/carousels', body, getHeaders())
		},
		delete: (id) => {
			return r.delete(SERVER_URL + '/carousels/' + id, getHeaders())
		}
	},
	product:{
		index: () => {
			return r.get(SERVER_URL + '/products')
		},
		show: (id) =>{
			return r.get(SERVER_URL + '/products/' + id)
		},
		create: (body) => {
			return r.post(SERVER_URL + '/products', body, getHeaders())
		},
		edit: (body, id) => {
			return r.put(SERVER_URL + '/products/' + id, body, getHeaders())
		},
		delete: (id) => {
			return r.delete(SERVER_URL + '/products/' + id, getHeaders())
		}
	},
	option:{
		create:(body, id) => {
			return r.post(SERVER_URL + '/product_options', body, getHeaders())
		},
		delete:(id) => {
			return r.delete(SERVER_URL + '/product_options/' + id, getHeaders())
		}
	},
	section:{
		index: () => {
			return r.get(SERVER_URL + '/sections')
		},
		show: (id) =>{
			return r.get(SERVER_URL + '/sections/' + id)
		},
		create: (body) => {
			return r.post(SERVER_URL + '/sections', body, getHeaders())
		},
		edit: (body, id) => {
			return r.put(SERVER_URL + '/sections/' + id, body, getHeaders())
		},
		delete: (id) => {
			return r.delete(SERVER_URL + '/sections/' + id, getHeaders())
		}
	},
	employee:{
		index: () => {
			return r.get(SERVER_URL + '/employees')
		},
		show: (id) =>{
			return r.get(SERVER_URL + '/employees/' + id)
		},
		create: (body) => {
			return r.post(SERVER_URL + '/employees', body, getHeaders())
		},
		edit: (body, id) => {
			return r.put(SERVER_URL + '/employees/' + id, body, getHeaders())
		},
		delete: (id) => {
			return r.delete(SERVER_URL + '/employees/' + id, getHeaders())
		},
	},
	client:{
		index: () => {
			return r.get(SERVER_URL + '/clients')
		},
		show: (id) =>{
			return r.get(SERVER_URL + '/clients/' + id)
		},
		create: (body) => {
			return r.post(SERVER_URL + '/clients', body, getHeaders())
		},
		edit: (body, id) => {
			return r.put(SERVER_URL + '/clients/' + id, body, getHeaders())
		},
		delete: (id) => {
			return r.delete(SERVER_URL + '/clients/' + id, getHeaders())
		},
	},
	user: {
		edit: (body, id) => {
			return r.put(SERVER_URL + '/users/' + id, body, getHeaders())
		},
		show: (id) => {
			return r.get(SERVER_URL + '/users/' + id)
		}
	}
}