<template lang="pug">
	div.login.container-fluid
		div.row.justify-content-center
			div.col-8.align-self-center
				a.btn.btn-primary(href='/#/carousel' ) Carrusel
				a.btn.btn-primary(href='/#/product') Productos
				a.btn.btn-primary(href='/#/section') Secciones
				a.btn.btn-primary(href='/#/employee') Empleados
				a.btn.btn-primary(href='/#/client') Clientes
				a.btn.btn-primary(href='/#/user') Informacion
				button.btn.btn-danger(@click="logout()") Cerrar sesión
</template>

<script>
import api from '../requests'
export default {
	data(){
		return{
		}
	},
	methods:{
		logout(){
			api.session.logout().then(() => {
				localStorage.clear()
				this.$router.push('/')
			})
		}
	}
}
</script>

<style lang="scss" scoped>
	.login{
		height: 100%;
		button, a{
			margin-top: 10px;
			width: 100%;
		}
	}
</style>