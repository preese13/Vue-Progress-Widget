<template>
    <div>
        <button
            id="save-enrollment-btn"
            class="btn btn-success float-right mobile-friendly-btn save-enrollment-btn"
            v-on:click="tryBeginSave"
            v-if="!(this.completedItems === this.totalItems)">
            Save & Continue
        </button>
    </div>
</template>

<script>
export default {
  computed: {
    completedItems() {
      return this.$store.state.progressWidget.completedItems;
    },
    totalItems() {
      return this.$store.state.progressWidget.items.length;
    }
  },

  methods: {
    tryBeginSave() {
      this.$store.dispatch("toaster/toggleToaster");
      this.$store.dispatch("toaster/setToasterColor", { color: "yellow" });
      this.$store.dispatch("toaster/toggleBricks", { bricks: true });
      this.$store.dispatch("toaster/setToasterTitle", { title: "Saving" });

      setTimeout(() => {
        this.$store.dispatch("toaster/toggleBricks", { bricks: false });
        this.$store.dispatch("toaster/setToasterColor", { color: "green" });
        this.$store.dispatch("toaster/setToasterSuccessMessage", {
          successMessage: "Saved!"
        });
        this.$store.dispatch("toaster/toggleToasterSuccess", { success: true });
      }, 2000);

      /*setTimeout(() => {
        this.$store.dispatch("toggleBricks", { bricks: false });
        this.$store.dispatch("setToasterColor", { color: "green" });
        this.$store.dispatch("setToasterSuccessMessage", {
          successMessage: "Saved!"
        });
        this.$store.dispatch("toggleToasterSuccess", { success: true });
      }, 2000);*/

      setTimeout(() => {
        this.$store.dispatch("toaster/resetToaster");

        this.$store.dispatch("progressWidget/closeGlossary");
        this.$store.dispatch("save", {
          itemIndex: this.$store.state.progressWidget.currentItemIndex
        });
      }, 3000);
    }
  }
};
</script>
<style>
</style>
