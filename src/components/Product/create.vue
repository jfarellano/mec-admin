<template lang='pug'>
	div.carusel.container-fluid 
		div.row.justify-content-center
			div.col-md-10(style='text-align: center;')
				img(v-if='product.picture != null' :src='getImage()')
				b-button.loadBtn(@click="$refs.fileInput.$el.querySelector('input[type=file]').click()") Seleccionar imagen
				b-form-file(ref='fileInput' v-model='product.picture' style='display: none;' accept="image/jpeg, image/png")
				p.selectedImage(v-if='product.picture != null') {{product.picture.name}}
				h4 Nombre
				div.input-group
					input(v-model="product.name")
				h4 Descripcion
				div.input-group
					textarea(v-model="product.description" rows='3')
				h4 Opciones
				div.input-group.option(v-for='(opt, index) in options' :key="index")
					input(v-model="opt.text")
					b-button.btn.btn-danger(@click='deleteOpt(index)') X
				b-button.btn.btn-primary(@click="addOpt()") Agregar opcion
				b-button.btn.btn-success(@click="create()") Guardar
				a.btn.btn-danger(href="/#/product" ) Cancelar
</template>

<script>
import api from '../../requests'
export default {
	data(){
		return{
			product: {},
			options: []
		}
	},
	methods: {
		getImage() {
      return URL.createObjectURL(this.product.picture);
		},
		addOpt(){
			this.options.push({text: ''})
		},
		deleteOpt(id){
			this.options.splice(id,1)
		},
		create(){
			let fd = new FormData();
			fd.append('picture', this.product.picture)
			fd.append('name', this.product.name)
			fd.append('description', this.product.description)
			let options = ''
			this.options.forEach((opt) => {
				options = options + opt.text + ', '
			})
			fd.append('options', options.slice(0, options.length - 2))
			api.product.create(fd).then(() => {
				this.$router.push('/product')
			}).catch(()=>{
				alert('Hubo un error subiendo la imagen, porfavor revise su conección a internet si esta conectado llame a soporte')
			})
		}
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