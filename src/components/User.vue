<template lang='pug'>
	div.carusel.container-fluid 
		div.row.justify-content-center
			div.col-md-10(style='text-align: center;')
				h4 Nombre de usuario
				div.input-group
					input(v-model="user.username" disabled)
				h4 Telefonos
				div.input-group
					input(v-model="user.phones")
				h4 Direccion
				div.input-group
					input(v-model="user.address")
				h4 Correos electronicos
				div.input-group
					textarea(v-model="user.emails" rows='3')
				b-button.btn.btn-success(@click="edit()") Guardar
				a.btn.btn-danger(href="/#/dashboard" ) Cancelar
</template>

<script>
import api from '../requests'
export default {
	data(){
		return{
			user: {}
		}
	},
	methods: {
		edit(){
			api.section.edit(this.user, this.user.id).then(() => {
				this.$router.push('/dashboard')
			}).catch(()=>{
				alert('Hubo un error editando el sectiono, porfavor revise su conección a internet si esta conectado llame a soporte')
			})
		},
		get(){
			api.user.show(1).then((response) => {
				this.user = response.data
			})
		}
	},
	created(){
		this.get()
	}
}
</script>

<style scoped lang='scss'>
	button, a, input, textarea{
		width: 100%;
		margin: 10px 0px;
	}
</style>