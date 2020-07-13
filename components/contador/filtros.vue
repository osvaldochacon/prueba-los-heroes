<template>
  <div>
    <div class="row">
      <div class="col-4" style="padding: 10px; margin-left: 15%">
        <button class="btn-basic btn-black" @click="sortByName()">
          <span class="nav-text">Nombre</span>
          <i class="fa fa-arrows-v"></i>
        </button>
        <button class="btn-basic btn-black" @click="sortByValor()">
          <span class="nav-text">Valor</span>
          <i class="fa fa-arrows-v"></i>
        </button>
      </div>

      <div class="col-4" style="float: right;">
        <div class="row">
          <div class="col-2" style="padding: 10px; margin-right: 30px">
            <input
              type="text"
              placeholder="Nombre contador"
              v-model="nameFilter"
              @keyup="filterByName()"
            />
          </div>
          <div class="col-1" style="padding: 10px; margin-right: 30px">
            <input
              type="number"
              title="Minimo contador en la tabla"
              placeholder="Minimo"
              min="0"
              max="20"
              v-model="minFilter"
              @change="filterByRange()"
              @keyup="filterByRange()"
            />
          </div>
          <div class="col-1" style="padding: 10px;">
            <input
              type="number"
              title="Maximo contador en la tabla"
              placeholder="Maximo"
              min="0"
              max="20"
              v-model="maxFilter"
              @keyup="filterByRange()"
              @change="filterByRange()"
            />
          </div>
          <div class="col-3" style="margin-left: 30px; margin-top: 5px">
            <button
              class="btn-basic btn-minus"
              title="Limpiar filtro de la tabla"
              @click="cleanFilters()"
            >
              <span style="font-weight: bold;">Limpiar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "filtros",
  data() {
    return {
      nameFilter: undefined,
      orderByName: undefined,
      orderByValue: undefined,
      minFilter: 0,
      maxFilter: 20
    };
  },
  components: {},
  methods: {
    sortByName() {
      if (this.orderByName == undefined || this.orderByName == "desc") {
        this.orderByName = "asc";
      } else {
        this.orderByName = "desc";
      }
      this.$store.commit("sortByName", this.orderByName);
    },
    sortByValor() {
      if (this.orderByValue == undefined || this.orderByValue == "desc") {
        this.orderByValue = "asc";
      } else {
        this.orderByValue = "desc";
      }
      this.$store.commit("sortByValue", this.orderByValue);
    },
    filterByName() {
      if (this.nameFilter != "" || this.nameFilter != undefined) {
        this.$store.commit("filterByName", this.nameFilter);
      } else {
        this.$store.commit("cleanFilters");
      }
    },
    filterByRange() {
      this.$store.commit("filterByRange", {min: this.minFilter, max: this.maxFilter});
    },
    cleanFilters() {
      this.$store.commit("cleanFilters");
      this.nameFilter="";
      this.minFilter= 0;
      this.maxFilter= 20;
    }
  },
  computed: {}
};
</script>

<style scoped>
.topnav input {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.nav-text {
  font-weight: bold;
  color: white;
}
</style>