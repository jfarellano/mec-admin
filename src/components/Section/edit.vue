<template lang='pug'>
	div.carusel.container-fluid 
		div.row.justify-content-center
			div.col-md-10(style='text-align: center;')
				img(v-if='section.picture != null' :src='getImage()')
				b-button.loadBtn(@click="$refs.fileInput.$el.querySelector('input[type=file]').click()") Seleccionar imagen
				b-form-file(ref='fileInput' v-model='section.picture' style='display: none;' accept="image/jpeg, image/png")
				p.selectedImage(v-if='section.picture != null') {{section.picture.name}}
				h4 Nombre
				div.input-group
					input(v-model="section.name")
				h4 Descripcion
				div.input-group
					textarea(v-model="section.description" rows='3')
				b-button.btn.btn-success(@click="edit()") Guardar
				a.btn.btn-danger(href="/#/section" ) Cancelar
</template>

<script>
import api from '../../requests'
export default {
	data(){
		return{
			section: {}
		}
	},
	methods: {
		getImage() {
      return typeof this.section.picture == 'string' ? this.section.picture : URL.createObjectURL(this.section.picture);
		},
		edit(){
			let fd = new FormData();
			if(typeof this.section.picture != 'string') fd.append('picture', this.section.picture)
			fd.append('name', this.section.name)
			fd.append('description', this.section.description)
			api.section.edit(fd, this.section.id).then(() => {
				this.$router.push('/section')
			}).catch(()=>{
				alert('Hubo un error editando el sectiono, porfavor revise su conección a internet si esta conectado llame a soporte')
			})
		},
		get(){
			api.section.show(this.$route.params.SectionID).then((response) => {
				this.section = response.data
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