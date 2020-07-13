<template>
  <div>
    <button class="btn-basic btn-action btn-minus" @click="minus()">-</button>
    <input id="inputValor" type="text" disabled v-model="this.getContadores[position].valor" />
    <button class="btn-basic btn-action btn-plus" @click="plus()">+</button>
  </div>
</template>


<script>
import { mapMutations, mapGetters } from "vuex";
import valor from "@/components/contador/valor.vue";
export default {
  name: "listar",
  props: {
    position: 0
  },
  components: {
    valor
  },
  methods: {
    plus() {
      this.$store.commit("plus", this.position);
    },
    minus() {
      this.$store.commit("minus", this.position);
    }
  },
  computed: {
    ...mapGetters(["getContadores"])
  }
};
</script>

<style scoped>
#inputValor {
  text-align: center;
}
</style>