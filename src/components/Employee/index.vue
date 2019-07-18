<template lang='pug'>
	div.carusel.container-fluid
		div.row
			div.col
				a.btn.btn-primary(href="/#/dashboard" ) Inicio
				a.btn.btn-primary(href="/#/employee/new" ) Crear nuevo
		div.row.justify-content-center(style='margin-top: 10px;')
			div.col-md-10
				div.container-fluid 
					div.row.justify-content-center
						div.card(style='width: 18rem; margin:5px;' v-for='employee in employees' :key="employee.id")
							img(:src='employee.picture')
							div.card-body
								h5.card-title {{ employee.name }}
								p.card-text {{ employee.quote.slice(0, 100) }}
								a.btn.btn-warning(:href='"/#/employee/" + employee.id') Editar
								button.btn.btn-danger(@click="remove(employee.id)") Eliminar
</template>

<script>
import api from "../../requests";
export default {
  data() {
    return {
      employees: []
    };
  },
  methods: {
    remove(id) {
      api.employee.delete(id).then(() => {
				alert("El employee se ha eliminado correctamente");
				this.get()
      });
    },
    get() {
      api.employee.index().then(response => {
        this.employees = response.data;
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
