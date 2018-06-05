<template>
  <div id="medical">
    <div class="section">
      <div class="header"> <h3>Who am I enrolling?</h3></div>
      <div id="subSection1">
        <div class="forgottenContainer"><div id="selector1" class="selector"></div> <p>myself</p></div>
        <div class="forgottenContainer"><div id="selector2" class="selector"></div><p>my dependent</p></div>
      </div>
    </div>
    <div class="section">
      <div class="header"><h3>Help me choose a plan</h3></div>
      <div id="subSection2">
        <div class="fakeButton">Things to Consider</div>
        <div class="fakeButton">Decision Support</div>
      </div>
    </div>
    <div class="section">
      <div class="header"><h3>Which plan do I want?</h3></div>
      <div id="subSection3">
        <h4>2018 Medical Base Plan</h4>
        <div id="planContainer">
          <div id="containerTop">
            <div id="topLeft">
              <p id="planPremium">$ 7.34</p>
              <p id="costPerPayPeriod">Cost per pay period</p>
              <div id="selectButton">Select Plan</div>
            </div>
            <div id="topRight">
              <p>Effective on 02/05/18</p>
            </div>
          </div>
          <div id="containerBottom">
            <div>Compare</div>
            <div>Details</div>
           
          </div>
        </div>
      </div>
    </div>
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
        I9formTitle(){
            return this.$store.state.I9formTitle
        },
        I9sectionTitle(){
            return this.$store.state.I9sectionTitle
        },
        I9paragraph1(){
            return this.$store.state.I9paragraph1
        },
        I9paragraph2(){
            return this.$store.state.I9paragraph2
        },
        I9paragraph3(){
            return this.$store.state.I9paragraph3
        },
        I9paragraph4(){
            return this.$store.state.I9paragraph4
        },
      },
    methods: {
      i9Complete: function(){
        this.$store.dispatch('i9Complete')
        this.$store.dispatch('setRouteI9')
        this.$store.dispatch('i9RouterLink')
        this.$store.dispatch('checkmark2Display')
      }
    }
};
</script>

<style>
.section{
  width: 100%;
}
.header{
  width: 100%;
  height: 50px;
  background-color: #016A9F;
  color: white;
  display: flex;
  align-items: center;
}
#buttonContainer{
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.fakeButton{
  width: 140px;
  height: 35px;
  border-radius: 5px;
  background-color: #2bb415;
  color: white;
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}
.fakeButton :hover{
  background-color: #016A9F; 
}
#subSection2{
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
}
#subSection1{
  padding-left: 50px;
}
.selector{
  height: 10px;
  width: 10px;
  border-radius: 50px;
  background-color: white;
  border: 2px solid #2bb415;
  margin-right: 5px;
}
.forgottenContainer{
  display: flex;
  align-items: center;
}
#selector1 :hover{
  background-color: #2bb415;
}
h3{
  padding: none;
  margin: none;
  margin-left: 20px;
}
.buttonSection {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
#planContainer{
  border: 2px solid #2bb415;
  height: 175px;
  width: 550px;
}
#subSection3{
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h4{
  width: 100%;
}
#containerTop{
  width: 100%;
  height: 73%;
  border-bottom: 1px solid lightgray;
  display: flex;
  flex-direction: row;
}
#topLeft{
  height: 100%;
  width: 33%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
#topRight{
  height: 100%;
  width: 66%;
  padding-left: 5px;
}
#selectButton{
  height: 25px;
  width: 100px;
  background-color: #2bb415;
  color: white;
  border-radius: 5px;

  text-align: center;
}
#planPremium{
  margin: 0px;
  padding: 0px;
  font-size: 25px;
}
#costPerPayPeriod{
  margin: 0px;
  padding: 0px;
}
#containerBottom{
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 25%;
}
#selectButton :hover {
  background-color: #016A9F;
  color: white;
}

</style>
