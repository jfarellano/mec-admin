<template lang='pug'>
	div.carusel.container-fluid 
		div.row.justify-content-center
			div.col-md-10(style='text-align: center;')
				img(v-if='employee.picture != null' :src='getImage()')
				b-button.loadBtn(@click="$refs.fileInput.$el.querySelector('input[type=file]').click()") Seleccionar imagen
				b-form-file(ref='fileInput' v-model='employee.picture' style='display: none;' accept="image/jpeg, image/png")
				p.selectedImage(v-if='employee.picture != null') {{employee.picture.name}}
				h4 Nombre
				div.input-group
					input(v-model="employee.name")
				h4 Frase
				div.input-group
					input(v-model="employee.quote")
				b-button.btn.btn-success(@click="edit()") Guardar
				a.btn.btn-danger(href="/#/employee" ) Cancelar
</template>

<script>
import api from '../../requests'
export default {
	data(){
		return{
			employee: {}
		}
	},
	methods: {
		getImage() {
      return typeof this.employee.picture == 'string' ? this.employee.picture : URL.createObjectURL(this.employee.picture);
		},
		edit(){
			let fd = new FormData();
			if(typeof this.employee.picture != 'string') fd.append('picture', this.employee.picture)
			fd.append('name', this.employee.name)
			fd.append('quote', this.employee.quote)
			api.employee.edit(fd, this.employee.id).then(() => {
				this.$router.push('/employee')
			}).catch(()=>{
				alert('Hubo un error editando el employeeo, porfavor revise su conección a internet si esta conectado llame a soporte')
			})
		},
		get(){
			api.employee.show(this.$route.params.EmployeeID).then((response) => {
				this.employee = response.data
			})
		}
	},
	created(){
		this.get()
	}
}
</script>

<style scoped lang='scss'>
	button, a, input{
		width: 100%;
		margin: 10px 0px;
	}
	img{
		height: 300px;
	}
	.option{
		input{
			width: 90%;
		}
		button{
			width: 10%;
			height: 32px;
		}
	}
</style>