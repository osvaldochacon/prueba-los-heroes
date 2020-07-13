<template>
  <div>
    <button class="btn-basic animate__animated animate__bounceInRight" id="btnAgregar" @click="nombre='';alerta='';" :disabled="getContadoresLength>=20">Agregar contador</button>
    <div id="modalAgregarContador" class="modal">
      <div class="modal-content animate__animated animate__fadeInDown">
        <span class="close">&times;</span>
        <h1>Nombre</h1>
        <input
          id="inputNombre"
          type="text"
          placeholder="Ingrese el nombre del contador"
          v-model="nombre"
          maxlength="20"
        />
        <br />
        <button
          class="btn-basic btn-plus"
          id="saveContador"
          style="margin-top:10px"
          @click="agregar()"
          :disabled="isDisabledAgregar()"
        >Añadir</button>
        <p style="color: red">{{this.alerta}}</p>
      </div>
    </div>
  </div>
</template>


<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "agregarModal",
  data() {
    return {
      nombre: "",
      alerta: ""
    };
  },
  components: {},
  methods: {
    validaInput() {
      let res = true;
      this.alerta = "";
      if (this.nombre.length > 20) {
        res = false;
        this.alerta = "El nombre no puede exceder los 20 caracteres \n";
      }
      if (this.getContadoresLength >= 20) {
        res = false;
        this.alerta = "No puedes agregar mas de 20 contadores \n";
      }
      if (this.nombre == "") {
        res = false;
        this.alerta = "El nombre no puede estar vacio \n";
      }
      return res;
    },
    isDisabledAgregar() {
      return this.nombre == "" ? true : false;
    },
    agregar() {
      if (this.validaInput()) {
        let res = confirm("¿Esta seguro que desea agregar un contador?");
        if (res == true) {
          this.$store.commit("agregar", this.nombre);
          let modal = document.getElementById("modalAgregarContador");
          modal.style.display = "none";
        }
      }
    }
  },
  mounted() {
    let modal = document.getElementById("modalAgregarContador");
    let btn = document.getElementById("btnAgregar");
    let span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
      modal.style.display = "block";
    };
    span.onclick = function() {
      modal.style.display = "none";
    };
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  },
  computed: {
    ...mapGetters(["getContadoresLength"])
  }
};
</script>

<style  scoped>
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

#btnAgregar {
  float: right;
  background-color: #a5d6a7;
  color: black;
  font-weight: bold;
}

button:disabled {
    background-color: grey !important;
}

#inputNombre {
  width: 60%;
  padding: 20px;
}

input:disabled {
    background-color: grey !important;
}
</style>
