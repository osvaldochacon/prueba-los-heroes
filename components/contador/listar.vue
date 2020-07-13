<template>
  <div class="box-listar">
    <div class="row">
      <div class="col-7" style="margin-left: 15%">
        <div class="row">
          <div class="col-5">
            <h1 style="color: white; float: left">Contadores</h1>
          </div>
          <div class="col-5">
            <agregarModal />
          </div>
        </div>

        <table class="table animate__animated animate__fadeInUp" style="overflow-x:auto">
          <thead>
            <tr>
              <th>Indice</th>
              <th>Nombre</th>
              <th>Valor</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(contador,index) in getContadores" :key="index">
              <td>{{index+1}}</td>
              <td>{{contador.nombre}}</td>
              <td>
                <valor :position="index" />
              </td>
              <td>
                <button
                  class="btn-basic btn-borrar"
                  @click="eliminar(index)"
                >borrar</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div v-if="getContadoresLength==0">
          <h2 style="color: white" class="animate__animated animate__bounceInUp">Sin contadores</h2>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapMutations, mapGetters } from "vuex";
import valor from "@/components/contador/valor.vue";
import agregarModal from "@/components/contador/agregar.vue";
export default {
  name: "listar",
  components: {
    valor,
    agregarModal
  },
  methods: {
    eliminar(index) {
      this.$store.commit("delete", index);
    }
  },
  computed: {
    ...mapGetters(["getContadores", "getContadoresLength"])
  }
};
</script>

<style scoped>
.box-listar {
  margin-top: 30px;
  text-align: center;
}
</style>