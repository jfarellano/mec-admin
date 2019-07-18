<template lang='pug'>
	div.carusel.container-fluid 
		div.row.justify-content-center
			div.col-md-10(style='text-align: center;')
				img(v-if='client.picture != null' :src='getImage()')
				b-button.loadBtn(@click="$refs.fileInput.$el.querySelector('input[type=file]').click()") Seleccionar imagen
				b-form-file(ref='fileInput' v-model='client.picture' style='display: none;' accept="image/jpeg, image/png")
				p.selectedImage(v-if='client.picture != null') {{client.picture.name}}
				h4 Nombre
				div.input-group
					input(v-model="client.name")
				h4 URL
				div.input-group
					input(v-model="client.url")
				b-button.btn.btn-success(@click="edit()") Guardar
				a.btn.btn-danger(href="/#/client" ) Cancelar
</template>

<script>
import api from '../../requests'
export default {
	data(){
		return{
			client: {}
		}
	},
	methods: {
		getImage() {
      return typeof this.client.picture == 'string' ? this.client.picture : URL.createObjectURL(this.client.picture);
		},
		edit(){
			let fd = new FormData();
			if(typeof this.client.picture != 'string') fd.append('picture', this.client.picture)
			fd.append('name', this.client.name)
			fd.append('url', this.client.url)
			api.client.edit(fd, this.client.id).then(() => {
				this.$router.push('/client')
			}).catch(()=>{
				alert('Hubo un error editando el cliento, porfavor revise su conección a internet si esta conectado llame a soporte')
			})
		},
		get(){
			api.client.show(this.$route.params.ClientID).then((response) => {
				this.client = response.data
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