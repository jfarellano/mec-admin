<template lang='pug'>
	div.carusel.container-fluid
		div.row
			div.col
				a.btn.btn-primary(href="/#/dashboard" ) Inicio
				a.btn.btn-primary(href="/#/section/new" ) Crear nuevo
		div.row.justify-content-center(style='margin-top: 10px;')
			div.col-md-10
				div.container-fluid 
					div.row.justify-content-center
						div.card(style='width: 18rem; margin:5px;' v-for='section in sections' :key="section.id")
							img(:src='section.picture')
							div.card-body
								h5.card-title {{ section.name }}
								p.card-text {{ section.description.slice(0, 100) }}
								a.btn.btn-warning(:href='"/#/section/" + section.id') Editar
								button.btn.btn-danger(@click="remove(section.id)") Eliminar
</template>

<script>
import api from "../../requests";
export default {
  data() {
    return {
      sections: []
    };
  },
  methods: {
    remove(id) {
      api.section.delete(id).then(() => {
				alert("El section se ha eliminado correctamente");
				this.get()
      });
    },
    get() {
      api.section.index().then(response => {
        this.sections = response.data;
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
