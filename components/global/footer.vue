<template>
  <div>
    <div class="footer">
      <h2>Total de todos los contadores: {{getContadoresLength}}</h2>
    </div>
  </div>
</template>


<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "foot",
  components: {},
  methods: {},
  computed: {
    ...mapGetters(["getContadoresLength"])
  }
};
</script>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #45289f;
  color: white;
  text-align: center;
}
</style>
