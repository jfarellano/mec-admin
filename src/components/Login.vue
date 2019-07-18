<template lang="pug">
	div.login.container-fluid
		div.row.justify-content-center
			div.col-8.align-self-center
				h3 Usuario
				div.input-group
					input(v-model="user.username")
				h3 Contraseña
				div.input-v-chip-group
					input(v-model="user.password" type="password" )
				button.btn.btn-primary(v-on:click.prevent='login()') Ingresar
</template>

<script>
import api from '../requests'
export default {
	data(){
		return{
			user: {}
		}
	},
	methods:{
		login(){
			api.session.login(this.user).then((response) => {
				localStorage.setItem('secret', response.data.secret)
				this.$router.push('/dashboard')
			}).catch(()=> {
				alert('Credenciales invalidas')
			})
		}
	}
}
</script>

<style lang="scss" scoped>
	.login{
		height: 100%;
		input{
			width: 100%;
		}
		button{
			margin-top: 10px;
			width: 100%;
		}
	}
</style>
