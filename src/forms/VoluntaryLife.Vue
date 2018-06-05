<template>
  <div id="voluntary-life">
    <h2 class="formTitle">Voluntary Life</h2>
    <form class="formSection">
      <h3>Enroll Myself</h3>
      <ul id="dental-ul">
        <li class="dental-li">Requested benefit</li>
        <li class="dental-li">Requested per pay cost</li>
        <li class="dental-li">Gauranteed issue</li>
        <li class="dental-li">Maximum amount</li>
        <li class="dental-li">Pending Medical Underwriting</li>
        <li class="dental-li">Approved benefit</li>
        <li class="dental-li">Approved perpay cost</li>
        <li class="dental-li">$135,000</li>
        <li class="dental-li">$20.25</li>
        <li class="dental-li">$50,000</li>
        <li class="dental-li">250,000</li>
        <li class="dental-li">yes</li>
        <li class="dental-li">$50,000</li>
        <li class="dental-li">$7.50</li>
      </ul>
      <h3>Enroll My Spouse</h3>
       <ul id="dental-ul">
        <li class="dental-li">Requested benefit</li>
        <li class="dental-li">Requested per pay cost</li>
        <li class="dental-li">Gauranteed issue</li>
        <li class="dental-li">Maximum amount</li>
        <li class="dental-li">Pending Medical Underwriting</li>
        <li class="dental-li">Approved benefit</li>
        <li class="dental-li">Approved perpay cost</li>
        <li class="dental-li">$5,000</li>
        <li class="dental-li">$1.25</li>
        <li class="dental-li">$10,000</li>
        <li class="dental-li">$10,000</li>
        <li class="dental-li">yes</li>
        <li class="dental-li">$0</li>
        <li class="dental-li"></li>
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
  computed: {
    RTformTitle() {
      return this.$store.state.RTformTitle;
    },
    RTsectionTitle() {
      return this.$store.state.RTsectionTitle;
    },
    RTparagraph1() {
      return this.$store.state.RTparagraph1;
    },
    RTparagraph2() {
      return this.$store.state.RTparagraph2;
    },
    RTparagraph3() {
      return this.$store.state.RTparagraph3;
    },
    RTparagraph3() {
      return this.$store.state.RTparagraph3;
    },
    RTparagraph4() {
      return this.$store.state.RTparagraph3;
    },
    RTparagraph5() {
      return this.$store.state.RTparagraph3;
    }
  },
  methods: {
    rtComplete: function() {
      this.$store.dispatch("rtComplete");
      this.$store.dispatch("setRouteRT");
      this.$store.dispatch("rtRouterLink");
      this.$store.dispatch("checkmark6Display");
    }
  },
  components: {
    SaveButton
  }
};
</script>

<style>
.formSection {
  border-top: 1px solid lightgray;
  width: 90%;
  margin: 0px;
}
#voluntary-life {
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
#checkBox {
  background-color: #3699c8;
  color: white;
  font-size: 17px;
  width: 20px;
  height: 20px;
}
#buttonContainer2 {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  width: 320px;
  height: 75px;
  border-radius: 5px;
  margin-top: 40px;
  margin-bottom: 30px;
}
#buttonCenter {
  width: 80%;
  display: flex;
  justify-content: flex-start;
}
</style>
