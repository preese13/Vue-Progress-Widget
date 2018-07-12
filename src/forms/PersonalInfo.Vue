<template>
  <div id="personalInfo">
    <h2 class="formTitle">Personal Information</h2>
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
          <h4>Gender</h4>
          <input class="radio" type="radio" id="male" name="gender" value="0">
            <label for="male">Male</label>
          <input class="radio" type="radio" id="female" name="gender" value="1">
            <label for="female">Female</label>
          <input class="radio" type="radio" id="other" name="other" value="2">
            <label for="other">Other</label>
        </li>
        <li>
           <h4>Date of Birth</h4> 
           <input>
        </li>
        <li> 
          <h4>SSN</h4> 
          <p>****-**-5543</p> 
        </li>
        <li> 
          <h4>Tobacco User</h4>
          <input class="radio" type="radio" id="yes" name="smoker" value="0">
            <label for="yes">Yes</label>
          <input class="radio" type="radio" id="no" name="smoker" value="1">
            <label  for="no">No</label> 
          </li>
        <li> 
          <h4>Address 1</h4> 
          <input> 
        </li>
        <li> 
          <h4>Address 2</h4> 
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
        <li> 
          <h4>County</h4> 
          <input> 
        </li>
        <li> 
          <h4>Zip</h4> 
          <input> 
        </li>
        <li> 
          <h4>Phone Number</h4> 
          <input> 
        </li>
        <li> 
          <h4>Email Address</h4> 
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
  computed: {},

  components: {
    SaveButton
  },

  methods: {
    piComplete: function() {
      this.$store.dispatch("piComplete");
      this.$store.dispatch("setRoutePI");
      this.$store.dispatch("piRouterLink");
      this.$store.dispatch("checkmark1Display");
    },
    piRouterLink: function() {}
  }
};
</script>

<style>
.formSection {
  border-top: 1px solid lightgray;
  width: 90%;
  margin-bottom: 40px;
  padding-top: 30px;
}
.formItem {
  display: flex;
  flex-direction: column;
  width: 100%;
}
p {
  padding-bottom: 0px;
}
input {
  height: 35px;
  width: 60%;
  border-radius: 3px;
  font-size: 15px;
  border: 1px solid lightgrey;
  padding-left: 5px;
}
#personalInfo {
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

  margin-bottom: 40px;
  width: 90%;
}

.formItem2 {
  display: flex;
  flex-direction: column;
  width: 50%;
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
.buttonSection {
  width: 100%;

  display: flex;
  justify-content: flex-end;
}
span {
  padding: 0px;
}

ul{
  list-style-type: none;
}
li{
  display: flex;
  flex-direction: row;
  align-items: center;
}
h4{
  width: 20%;
}
.radio{
  height: 15px;
  width: 30px;;
}

@media screen and (max-width: 800px) {
  ul {
    padding-left: 0px;

  }
}
</style>
