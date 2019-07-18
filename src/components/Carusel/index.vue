<template lang='pug'>
	div.carusel.container-fluid
		div.row
			div.col
				a.btn.btn-primary(href="/#/dashboard" ) Inicio
				a.btn.btn-primary(href="/#/carousel/new" ) Crear nuevo
		div.row.justify-content-center(style='margin-top: 10px;')
			div.col-md-10
				div.container-fluid 
					div.row.justify-content-center
						div.card(style='width: 18rem; margin:5px;' v-for='image in images' :key="image.id")
							img(:src='image.carousel_pictures[0].picture')
							div.card-body
								button.btn.btn-danger(@click="remove(image.id)") Eliminar
</template>

<script>
import api from "../../requests";
export default {
  data() {
    return {
      images: []
    };
  },
  methods: {
    remove(id) {
      api.carousel.delete(id).then(() => {
				alert("La imagen se ha eliminado correctamente");
				this.get()
      });
    },
    get() {
      api.carousel.index().then(response => {
        this.images = response.data;
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
