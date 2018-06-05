<template>
  <div id="dependentInfo">
    <h2 class="formTitle">Dependent Information</h2>
    <form class="formSection">
      <ul>
        <li> 
          <h4>First Name</h4> 
          <input> 
        </li>
        <li>
           <h4>Middle Name</h4>
           <input>
          </li>
        <li> 
          <h4>Last Name</h4> 
          <input> 
        </li>
        <li> 
          <h4>Suffix</h4> 
          <input> 
        </li>
        <li> 
          <h4>Relationship</h4> 
          <input> 
        </li>
        <li> 
          <h4>Gender</h4>
          <input class="radio" type="radio" id="male" name="gender" value="0">
            <label for="male">Male</label>
          <input class="radio" type="radio" id="female" name="gender" value="1">
            <label for="female">Female</label>
          <input class="radio" type="radio" id="other" name="other" value="2">
            <label for="other">Other</label>
        </li>
        <li>
           <h4>Age</h4> 
           <input>
        </li>
        <li> 
          <h4>SSN</h4> 
          <input> 
        </li>
        <li> 
          <h4>Fulltime College Student</h4>
          <input class="radio" type="radio" id="yes" name="college" value="0">
            <label for="yes">Yes</label>
          <input class="radio" type="radio" id="no" name="college" value="1">
            <label  for="no">No</label> 
          </li>
          <li> 
          <h4>Disabled</h4>
          <input class="radio" type="radio" id="yes" name="disabled" value="0">
            <label for="yes">Yes</label>
          </li>
          <li>
          <h4>Tobacco User</h4>
          <input class="radio" type="radio" id="yes" name="smoker" value="0">
            <label for="yes">Yes</label>
          <input class="radio" type="radio" id="no" name="smoker" value="1">
            <label  for="no">No</label> 
          </li>
        <li> 
          <h4>Address</h4> 
          <input> 
        </li>
        <li> 
          <h4>Medicare Eligable</h4>
          <input class="radio" type="radio" id="yes" name="meidcare" value="0">
            <label for="yes">Yes</label>
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
  computed: {
    W4formTitle() {
      return this.$store.state.W4formTitle;
    },
    W4sectionTitle() {
      return this.$store.state.W4sectionTitle;
    },
    W4paragraph1() {
      return this.$store.state.W4paragraph1;
    },
    W4paragraph2() {
      return this.$store.state.W4paragraph2;
    }
  },
  methods: {
    w4Complete: function() {
      this.$store.dispatch("w4Complete");
      this.$store.dispatch("setRouteW4");
      this.$store.dispatch("w4RouterLink");
      this.$store.dispatch("checkmark4Display");
    }
  },

  components: {
    SaveButton
  },
};
</script>

<style>
#dependentInfo{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
.formSection {
  border-top: 1px solid lightgray;
  width: 90%;
}
#I9 {
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
select {
  width: 400px;
  height: 40px;
  margin-bottom: 20px;
}
.buttonContainer {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
#paddingTop25px {
  padding-top: 25px;
}
input {
  height: 35px;
  width: 90%;
  border-radius: 3px;
  font-size: 15px;
  border: 1px solid lightgrey;
  padding-left: 5px;
}
.fillWidth {
  width: 40%;
}
option {
  width: 100%;
}
</style>
