<template lang='pug'>
	div.carusel.container-fluid
		div.row
			div.col
				a.btn.btn-primary(href="/#/dashboard" ) Inicio
				a.btn.btn-primary(href="/#/product/new" ) Crear nuevo
		div.row.justify-content-center(style='margin-top: 10px;')
			div.col-md-10
				div.container-fluid 
					div.row.justify-content-center
						div.card(style='width: 18rem; margin:5px;' v-for='product in products' :key="product.id")
							img(:src='product.picture')
							div.card-body
								h5.card-title {{ product.name }}
								p.card-text {{ product.description.slice(0, 100) }}
								a.btn.btn-warning(:href='"/#/product/" + product.id') Editar
								button.btn.btn-danger(@click="remove(product.id)") Eliminar
</template>

<script>
import api from "../../requests";
export default {
  data() {
    return {
      products: []
    };
  },
  methods: {
    remove(id) {
      api.product.delete(id).then(() => {
				alert("El producto se ha eliminado correctamente");
				this.get()
      });
    },
    get() {
      api.product.index().then(response => {
        this.products = response.data;
      });
    }
  },
  created() {
		this.get()
	}
};
</script>

<style scoped lang='scss'>
button, a{
  width: 100%;
	margin-top: 10px;
}
img {
  height: 200px;
}
</style>
