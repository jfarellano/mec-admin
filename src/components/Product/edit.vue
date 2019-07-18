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
				div.input-group.option(v-for='opt in options' :key="opt.id")
					input(v-model="opt.text" disabled)
					b-button.btn.btn-danger(@click='deleteOpt(opt.id)') X
				h4 Opcion nueva
				div.input-group
					input(v-model="option.text")
				b-button.btn.btn-warning(@click="addOpt()") Agregar opcion
				b-button.btn.btn-success(@click="edit()") Guardar
				a.btn.btn-danger(href="/#/product" ) Cancelar
</template>

<script>
import api from '../../requests'
export default {
	data(){
		return{
			product: {},
			options: [],
			option: {}
		}
	},
	methods: {
		getImage() {
      return typeof this.product.picture == 'string' ? this.product.picture : URL.createObjectURL(this.product.picture);
		},
		addOpt(){
			api.option.create({name: this.option.text, product_id: this.product.id}).then(() => {
				this.option = ''
				this.options = []
				this.get()
			})
		},
		deleteOpt(id){
			api.option.delete(id).then(()=>{
				this.options = []
				this.get()
			})
		},
		edit(){
			let fd = new FormData();
			if(typeof this.product.picture != 'string') fd.append('picture', this.product.picture)
			fd.append('name', this.product.name)
			fd.append('description', this.product.description)
			api.product.edit(fd, this.product.id).then(() => {
				this.$router.push('/product')
			}).catch(()=>{
				alert('Hubo un error editando el producto, porfavor revise su conección a internet si esta conectado llame a soporte')
			})
		},
		get(){
			api.product.show(this.$route.params.ProductID).then((response) => {
				this.product = response.data
				this.product.product_options.forEach((opt) => {
					this.options.push({text: opt.name, id: opt.id})
				})
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