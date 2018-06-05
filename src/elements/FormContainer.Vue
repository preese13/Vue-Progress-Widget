<template>
  <div id="Form-container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Form-container",
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style>
#Form-container {
  width: 65%;
  background-color: white;
  margin-right: 3%;
  border-radius: 5px;
  margin-bottom: 50px;
  border: 1px solid lightgray;
  z-index: 1;
}

@media screen and (max-width: 1100px) {
  #Form-container {
    width: 85%;
  }
}
@media screen and (max-width: 800px) {
  #Form-container {
    width: 100%;
    border-radius: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
  }
}
</style>
