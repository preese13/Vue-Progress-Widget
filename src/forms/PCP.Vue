<template>
  <div id="pcp">
    <h2 class="formTitle">Medical PCP Information</h2>
    <form class="formSection">
      <h3 id="pcp-h3">Primary Care Physician</h3>
      <p id="pcp-p">Use the links below to add or update primary care physician information for you and your enrolled dependents</p>
      <ul>
        <li> 
          <h4>Type</h4> 
          <input> 
        </li>
        <li>
           <h4>PPC ID</h4>
           <input>
          </li>
        <li> 
          <h4>First and or Last Name</h4> 
          <input> 
        </li>
        <li> 
          <h4>City</h4> 
          <input> 
        </li>
        <li> 
          <h4>State</h4> 
          <input> 
        </li>
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
        HBformTitle(){
            return this.$store.state.HBformTitle
        },
        HBsectionTitle(){
            return this.$store.state.HBsectionTitle
        },
        HBparagraph1(){
            return this.$store.state.HBparagraph1
        },
        HBparagraph2(){
            return this.$store.state.HBparagraph2
        },
        HBparagraph3(){
            return this.$store.state.HBparagraph3
        },
      },
    methods: {
      hbComplete: function(){
        this.$store.dispatch('hbComplete')
        this.$store.dispatch('setRouteHB')
        this.$store.dispatch('hbRouterLink')
        this.$store.dispatch('checkmark8Display')
      }
    }
}

</script>

<style>
.formSection {
  border-top: 1px solid lightgray;
  width: 90%;
  margin: 0px;
}
#pcp {
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
#checkBox{
  background-color: #3699C8;
  color: white;
  font-size: 17px;
  width: 20px;
  height: 20px;
  margin: 10px;
}
#buttonContainer3{
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  width: 430px;
  height: 75px;
  border-radius: 5px;
  margin-top: 40px;
  margin-bottom: 30px;

}
#buttonCenter{
    width: 80%;
    display: flex;
    justify-content: flex-start;
    
}
#signature2{
  width: 100px;
  height: 40px;
  background-color: #3699C8;
  color: white;
  font-size: 17px;
}
#pcp-p {
width: 100%;
}
</style>
