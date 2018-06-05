<template>
  <div id="progress-widget">
    <div class="progress-section-top">
      <div class="progress-title-conatiner">
        Progress: {{completedItems}} of {{totalItemCount}}
      </div>
    </div>
    <div class="progress-section-middle">
      <div class="progress-container">
        <div class="progress-bar" v-bind:style="{width: completedPercent + '%'}">
        </div>
      </div>
    </div>
    <div class="progress-section-bottom">
      <div id="glossary-button-container"
      v-on:click="toggleGlossary">
        View Items
        <img v-bind:class="{'icon-flipped': openGlossary}" src="../assets/carrot.png">
      </div>
    </div>
    <div class="progress-glossary-container"
    v-show="openGlossary">
      <ol style="padding-left:10px">
        <li class="glossary-item"
        v-for="(item, index) in items" 
       :key="index">
       <div class="icon-container">
          <img class="section-check"  src="../assets/checkmark.png" v-if="item.IsComplete && item.Url != path">
          <img class="section-arrow" src="../assets/NavArrow.png" v-if="item.Url === path">
        </div>
         <div class="index-container">{{index + 1}}. </div>
        <div v-on:click="routeClicked(item)" class="name-container">{{item.Name}}</div>
       </li>
      </ol>
    </div>
  </div>
</template>
     
<script>
export default {
  data() {
    return {};
  },

  methods: {
    routeClicked(data) {
      this.$store.dispatch("progressWidget/advance", data.Index);
    },
    toggleGlossary() {
      this.$store.dispatch("progressWidget/toggleGlossary");
      this.isOpen = !this.isOpen;
    }
  },

  computed: {
    openGlossary() {
      return this.$store.state.progressWidget.openGlossary;
    },
    items() {
      return this.$store.state.progressWidget.items;
    },
    totalItemCount() {
      return this.$store.state.progressWidget.items.length;
    },
    currentItemIndex() {
      return this.$store.state.progressWidget.currentItemIndex;
    },
    completedItems() {
      return this.$store.state.progressWidget.completedItems;
    },
    path() {
      return this.$route.path;
    },
    completedPercent() {
      return (
        this.$store.state.progressWidget.completedItems /
        this.$store.state.progressWidget.items.length *
        100
      );
    }
  }
};
</script>

<style>
#progress-widget {
  width: 25%;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 30px;
  border: 1px solid lightgray;
  height: fit-content;
}
.progress-section-top {
  height: 40px;
  font-size: 22px;
  padding-left: 20px;
  padding-top: 15px;
  display: inline-block;
}
.progress-section-middle {
  height: 50px;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
}
.progress-section-bottom {
  height: 25px;
  padding-right: 20px;
  padding-bottom: 15px;
  float: right;
}
.icon-flipped {
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  -moz-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}
.progress-container {
  width: 90%;
  height: 70%;
  background-color: lightgrey;
  border-radius: 20px;
}
.progress-bar {
  height: 100%;
  background-color: #2bb415;
  color: black;
  border-radius: 20px;
  -webkit-transition: width 0.5s; /* Safari */
  transition: width 0.5s;
}
.icon-container {
  width: 40px;
  margin-bottom: 10px;
  margin-left: 20px;
  border-radius: 20px;
}
.glossary-item {
  height: 30px;
  width: 100%;
}
.progress-glossary-container {
  padding-top: 20px;
}
.section-arrow {
  padding-top: 15px;
}
.section-check {
  padding-top: 15px;
}
.name-container {
  padding-left: 5px;
  text-decoration: underline;
  color: #439fba;
  cursor: pointer;
}
#glossary-button-container {
  cursor: pointer;
}

@media screen and (max-width: 1300px) {
  #progress-title {
    font-size: 20px;
  }
}
@media screen and (max-width: 1250px) {
  #progress-title {
    font-size: 18px;
  }
}
@media screen and (max-width: 1100px) {
  #progress-widget {
    width: 50%;
  }
  #progress-title {
    font-size: 23px;
  }
}
@media screen and (max-width: 800px) {
  #progress-widget {
    width: 100%;
    border-radius: 0px;
    margin-bottom: 0px;
    border-bottom: none;
  }

  .progress-section-middle {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>

