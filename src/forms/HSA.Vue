<template>
  <div id="HSA">
     <h2 class="formTitle">Consumer Directed Health</h2>
     <div class="formSection">
       <h4> Healthcare Savings Ammount</h4>
       <p id="poorCSS">As part of your medical plan, we provide a tax free account to help you pay for your medical expenses.  The account is managed by HSA bank and you are eligible to open an account if you are enrolled in a qualified high deductible health insurance plany through our company</p>
      <h5>Review The Plan Information</h5>
      <ul>
        <li><p>IRS Contribution Limit</p><p class="rightP">$3,400</p></li>
        <li><p>Employer Annual</p><p class="rightP">$500</p></li>
        <li><p>Contribution</p></li>
        <li><p>Effective Date</p><p class="rightP">01/01/2019</p></li>
      </ul>
      <h5>Choose Your Contribution</h5>
      <ul>
        <li><p>Eligible Yearly</p><p class="rightP">$2,900</p></li>
        <li><p>Contribution</p></li>
        <li><p>Employee Per Pay</p><input class="rightP"></li>
        <li><p>Election</p></li>
      </ul>
      <h5>Review Your Selection</h5>
      <p id="poorCSS">Your projected deferral through 12/31/19 is $500.00</p>
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
    EEOCformTitle() {
      return this.$store.state.EEOCformTitle;
    },
    EEOCsectionTitle() {
      return this.$store.state.EEOCsectionTitle;
    },
    EEOCparagraph1() {
      return this.$store.state.EEOCparagraph1;
    },
    EEOCparagraph2() {
      return this.$store.state.EEOCparagraph2;
    }
  },
  methods: {
    eeocComplete: function() {
      this.$store.dispatch("eeocComplete");
      this.$store.dispatch("setRouteEEOC");
      this.$store.dispatch("eeocRouterLink");
      this.$store.dispatch("checkmark5Display");
    }
  }
};
</script>

<style>
#HSA{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
h5{
  color: #2bb415;
}
li{
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: flex-start;
  
}
p{
  width: 40%;
}
#poorCSS{
  width: 100%;
}
</style>
