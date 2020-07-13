<template>
  <div>
    <div class="topnav">
      <filtros />
    </div>
  </div>
</template>


<script>
import filtros from "@/components/contador/filtros.vue";
export default {
  name: "navbar",
  components: {
    filtros
  },
  methods: {},
  computed: {}
};
</script>

<style scoped>
.topnav {
  background-color: #45289f;
  overflow: hidden;
  position: relative;
  width: 100%;
}

</style>