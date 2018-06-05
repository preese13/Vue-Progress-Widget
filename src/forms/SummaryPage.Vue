<template>
  <div id="summaryPage">
    <h2 class="formTitle">Enrollment Summary</h2>
    <form class="formSection">
      <p id="summary-p">Below is a summary of your elections and cost for the upcoming plan year. If you have any questions about your enrollment or would like to make changes, please contact HR. </p>
      <div id="summary-box">
        <h4 id="summary-h4">Please review the acknowledgment below</h4>
        <p id="summary-p">As an eligible employee, I acknowledge that I understand the benefits, rights, and obligations available to me under the plan.  I certify the facts contained in this summary are true and complete to the best of my knowledge.  I understand that deductions can be made on a pre-tax or post-tax basis.   Furthermore, I understand that elections for plans that are deducted on a pre-tax basis cannot be changed during the plan year unless I experience a Qualified Life Event.</p>
        <div class="buttonSection"> 
          <button id="summary-btn">Agree</button>
        </div>
      </div>

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
  }
};
</script>

<style>
#summaryPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#summary-box {
  border: 5px solid #2bb415;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
}
#summary-h4 {
  width: 100%;
  text-align: center;
}
#summary-p {
  width: 100%;
  text-align: center;
}
#summary-btn {
  background-color: #016a9f;
  color: white;
}
</style>
