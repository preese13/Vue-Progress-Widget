<template>
  <div id="dental">
    <h2 class="formTitle">Dental</h2>
    <form class="formSection-dental">
      <ul id="dental-ul">
        <li class="dental-li">Requested benefit</li>
        <li class="dental-li">Requested per pay cost</li>
        <li class="dental-li">Gauranteed issue</li>
        <li class="dental-li">Maximum amount</li>
        <li class="dental-li">$5,000</li>
        <li class="dental-li">$1.25</li>
        <li class="dental-li">$10,000</li>
        <li class="dental-li">$10,000</li>
      </ul>
    </form>
    <div class="buttonSection"> 
     <SaveButton />
    </div>
  </div>
</template>

<script>
import SaveButton from "../elements/SaveButton";

export default {
    components: {
    SaveButton
  },
  computed: {
    ESformTitle() {
      return this.$store.state.ESformTitle;
    },
    ESsectionTitle() {
      return this.$store.state.ESsectionTitle;
    },
    ESparagraph1() {
      return this.$store.state.ESparagraph1;
    },
    ESparagraph2() {
      return this.$store.state.ESparagraph2;
    },
    ESparagraph3() {
      return this.$store.state.ESparagraph3;
    }
  },
  methods: {
    esComplete: function() {
      this.$store.dispatch("esComplete");
      this.$store.dispatch("setRouteES");
      this.$store.dispatch("esRouterLink");
      this.$store.dispatch("checkmark3Display");
    }
  }
};
</script>

<style>
.formSection-dental {
  border-top: 1px solid lightgray;
  width: 100%;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#dental {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.formSection2 {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;

  margin-bottom: 15px;
  width: 90%;
}
.buttonSection {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
span {
  padding: 0px;
}
#prevSpan {
  color: #4e5665;
}
#prev {
  color: #4e5665;
  text-decoration: none;
}
button {
  height: 40px;
  width: 100px;
  background-color: #2bb415;
  border-radius: 3px;
  border: none;
  margin: 25px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}
#next {
  color: white;
  text-decoration: none;
  font-size: 20px;
}
#previous {
  background-color: white;
  border: 1px solid lightgray;
  color: #4e5665;
  text-decoration: none;
  font-size: 18px;
}
#signature {
  width: 170px;
  height: 45px;
  background-color: #3699c8;
  color: white;
  font-size: 17px;
}
#buttonContainer {
  display: flex;
  width: 90%;
  justify-content: flex-start;
}
#dental-ul {
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
  width: 100%;


}
.dental-li {
  margin: 5px;
}
</style>
