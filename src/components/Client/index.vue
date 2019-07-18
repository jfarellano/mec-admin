<template lang='pug'>
	div.carusel.container-fluid
		div.row
			div.col
				a.btn.btn-primary(href="/#/dashboard" ) Inicio
				a.btn.btn-primary(href="/#/client/new" ) Crear nuevo
		div.row.justify-content-center(style='margin-top: 10px;')
			div.col-md-10
				div.container-fluid 
					div.row.justify-content-center
						div.card(style='width: 18rem; margin:5px;' v-for='client in clients' :key="client.id")
							img(:src='client.picture')
							div.card-body
								h5.card-title {{ client.name }}
								p.card-text {{ client.url.slice(0, 100) }}
								a.btn.btn-warning(:href='"/#/client/" + client.id') Editar
								button.btn.btn-danger(@click="remove(client.id)") Eliminar
</template>

<script>
import api from "../../requests";
export default {
  data() {
    return {
      clients: []
    };
  },
  methods: {
    remove(id) {
      api.client.delete(id).then(() => {
				alert("El client se ha eliminado correctamente");
				this.get()
      });
    },
    get() {
      api.client.index().then(response => {
        this.clients = response.data;
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
