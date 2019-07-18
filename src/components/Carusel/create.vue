<template lang='pug'>
	div.carusel.container-fluid 
		div.row.justify-content-center
			div.col-md-10(style='text-align: center;')
				img(v-if='carousel.image != null' :src='getImage()')
				b-button.loadBtn(@click="$refs.fileInput.$el.querySelector('input[type=file]').click()") Seleccionar imagen
				b-form-file(ref='fileInput' v-model='carousel.image' style='display: none;' accept="image/jpeg, image/png")
				p.selectedImage(v-if='carousel.image != null') {{carousel.image.name}}
				b-button.btn.btn-success(@click="create()") Guardar
				a.btn.btn-danger(href="/#/carousel" ) Cancelar
</template>

<script>
import api from "../../requests";
export default {
  data() {
    return {
      carousel: {}
    };
  },
  methods: {
    getImage() {
      return URL.createObjectURL(this.carousel.image);
    },
    create() {
      let fd = new FormData();
      fd.append("image", this.carousel.image);
      fd.append("name", "nombre");
      api.carousel
        .create(fd)
        .then(() => {
          this.$router.push("/carousel");
        })
        .catch(() => {
          alert(
            "Hubo un error subiendo la imagen, porfavor revise su conección a internet si esta conectado llame a soporte"
          );
        });
    }
  }
};
</script>

<style scoped lang='scss'>
button,
a{
  width: 100%;
  margin: 10px 0px;
}
img {
  height: 300px;
}
</style>