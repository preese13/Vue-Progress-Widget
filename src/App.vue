<template>
<div>
  <Toaster></Toaster>
  <div id="app">
    <FormContainer></FormContainer>
    <ProgressWidget></ProgressWidget>
  </div>
</div>
</template>

<script>
//Forms are imported, as opposed to being kept in the store, because the actual app gets them in a similar format from the business logic layer
const mockData = require("./assets/mockData.json");

export default {
  name: "app",
  data() {
    return {
      //allows me to insert the mockData into vue
      progressState: {
        items: mockData.Items
      }
    };
  },

  mounted() {
    //method runs when dom is updated... follow the app in ./store/progresswidget or ./store.js
    this.$nextTick(() => {
      this.$store.dispatch("progressWidget/init", this.progressState);
      this.$store.dispatch("init", { router: this.$router });
    });
  }
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  background-color: #f3f3f3;
  font-family: "Open Sans", sans-serif;
}
input {
  float: left;
}

#topNav {
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 115px;
  border-bottom: 1px solid lightgray;
  z-index: 1;
}

#navTop {
  width: 100%;
  height: 40%;
  background-color: #016a9f;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

#navBottom {
  width: 100%;
  height: 60%;
  background-color: white;
  display: flex;
  align-items: center;
  font-weight: 700;
  justify-content: flex-start;
  color: #016a9f;
  font-size: 20px;
  padding-left: 20px;
}

span {
  padding-right: 20px;
}

#app {
  width: 95%;
  top: 150px;
  position: absolute;
  padding-left: 3%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #4e5665;
  z-index: 0;
}

@media screen and (max-width: 1100px) {
  #app {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
}

@media screen and (max-width: 800px) {
  #app {
    padding-left: 0px;
    padding-right: 0px;
    top: 115px;
    width: 100%;
  }

  #navBottom {
    width: 100%;
    padding: 0px;
  }
}
</style>
