<template>
<div id="toaster">
  <!--Transition for showing/ hiding toaster-->
   <transition name="slide-fade">

  <div v-show="showToaster" v-bind:class="{ toastergreen: green, toasterred: red, toasteryellow: yellow, toaster: true }">

    <img id="logo" src="../assets/EmployeeNavigator.png" style="width: 250px">

    <h2 v-show="title !== null && fail === false && success === false" class="blueText">{{title}}</h2>

    <!--Animation-->
    <div id="animation-station" v-show="bricks" style="height: 80px;" class="spinner spinner--stretch">
      <div v-bind:class="{ greenbricks: green, redbricks: red, yellowbricks: yellow, rect: true}" class="rect-1">
      </div>
      <div v-bind:class="{ greenbricks: green, redbricks: red, yellowbricks: yellow, rect: true}" class="rect-2">
      </div>
      <div v-bind:class="{ greenbricks: green, redbricks: red, yellowbricks: yellow, rect: true}" class="rect-3">
      </div>
      <div v-bind:class="{ greenbricks: green, redbricks: red, yellowbricks: yellow, rect: true}" class="rect-4">
      </div>
      <div v-bind:class="{ greenbricks: green, redbricks: red, yellowbricks: yellow, rect: true}" class="rect-5">
      </div>
      <div v-bind:class="{ greenbricks: green, redbricks: red, yellowbricks: yellow, rect: true}" class="rect-6">
      </div>
      <div v-bind:class="{ greenbricks: green, redbricks: red, yellowbricks: yellow, rect: true}" class="rect-7">
      </div>
    </div>

    <h4 v-show="message !== null && fail === false && success === false" class="blueText" >{{message}}</h4>

    <div v-show="success" class="success-container">
      <i class="fa fa-check fa-3x" style="display: inline-block;" v-bind:class="{redText: red, greenText: green, yellowText: yellow}"></i>
      <h2 v-show="successMessage !== null" v-bind:class="{redText: red, blueText: green, yellowText: yellow}" style="display: inline-block; margin-left: 10px;">{{successMessage}}</h2>
    </div>

    <div v-show="fail" class="fail-container">
      <i class="fa fa-times fa-3x" style="display: inline-block;" v-bind:class="{redText: red, greenText: green, yellowText: yellow}"></i>
      <h2 v-show="failMessage !== null " v-bind:class="{redText: red, blueText: green, yellowText: yellow}" style="display: inline-block; margin-left: 10px;">{{failMessage}}</h2>
    </div>
  </div>
   </transition>

</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  /*props: {
    showToaster: {
      default: false,
      type: Boolean
    },
    timer: {
      default: null,
      type: Number
    },
    bricks: {
      default: true,
      type: Boolean
    },
    color: {
      default: "green",
      type: String
    },
    success: {
      default: false,
      type: Boolean
    },
    fail: {
      default: false,
      type: Boolean
    },
    title: {
      default: null,
      type: String
    },
    message: {
      default: null,
      type: String
    },
    successMessage: {
      default: null,
      type: String
    },
    failMessage: {
      default: null,
      type: String
    }
  },*/
  watch: {
    showToaster(newValue) {
      if (newValue !== this.showToaster) {
        this.showToaster = newValue;
      }
    },
    timer(newValue) {
      if (newValue !== this.timer) {
        this.timer = newValue;
        this.setTimer(this.timer);
      }
    },
    bricks(newValue) {
      if (newValue !== this.bricks) {
        this.bricks = newValue;
      }
    },
    color(newValue) {
      if (newValue !== this.color) {
        this.color = newValue;
      }
    },
    success(newValue) {
      if (newValue !== this.success) {
        this.success = newValue;
      }
    },
    fail(newValue) {
      if (newValue !== this.fail) {
        this.fail = newValue;
      }
    },
    successMessage(newValue) {
      if (newValue !== this.successMessage) {
        this.successMessage = newValue;
      }
    },
    failMessage(newValue) {
      if (newValue !== this.failMessage) {
        this.failMessage = newValue;
      }
    },
    message(newValue) {
      if (newValue !== this.message) {
        this.message = newValue;
      }
    },
    title(newValue) {
      if (newValue !== this.title) {
        this.title = newValue;
      }
    },

    bricks() {
      if (this.bricks === true) {
        this.fail = false;
        this.success = false;
      }
    },
    success() {
      if (this.success === true) {
        this.fail = false;
        this.bricks = false;
      }
    },
    fail() {
      if (this.fail === true) {
        this.success = false;
        this.bricks = false;
      }
    }
  },

  methods: {
    setTimer(timer) {
      this.display = true;

      var self = this;
      setTimeout(function() {
        self.timer = null;
        this.$store.dispatch("toaster/toggleToaster");
        self.display = false;
        this.$store.dispatch("toaster/setTimer", { time: null });
      }, timer);
    }
  },

  computed: {
    showToaster() {
      return this.$store.state.toaster.showToaster;
    },

    timer() {
      return this.$store.state.toaster.timer;
    },

    bricks() {
      return this.$store.state.toaster.bricks;
    },

    color() {
      return this.$store.state.toaster.color;
    },

    success() {
      return this.$store.state.toaster.success;
    },

    fail() {
      return this.$store.state.toaster.fail;
    },

    title() {
      return this.$store.state.toaster.title;
    },

    message() {
      return this.$store.state.toaster.message;
    },

    successMessage() {
      return this.$store.state.toaster.successMessage;
    },

    failMessage() {
      return this.$store.state.toaster.failMessage;
    },
    green() {
      if (this.color === "green") {
        return true;
      } else if (this.color !== "red" && this.color !== "yellow") {
        return true;
      } else {
        return false;
      }
    },
    red() {
      if (this.color === "red") {
        return true;
      } else {
        return false;
      }
    },
    yellow() {
      if (this.color === "yellow") {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#toaster {
  left: 50%;
  transform: translateX(-50%);
  position: fixed;
  top: 0px;
  widows: auto;
  z-index: 100;
  transition: background-color 0.5s ease;
}
h4 {
  width: 100%;
  text-align: center;
}
span {
  font-size: 15px !important;
}
.toaster {
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border: 3px solid;
  border-radius: 5px;
  border-top: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-top: 10px;
  padding-bottom: 0px;
  font-family: "Roboto", sans-serif;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.176);
  z-index: 10000;
  padding-bottom: 5px;
  background-color: white;
}

.toastergreen {
  border: 3px solid #58a94d;
  border-top: 0px;
}
.toasterred {
  border: 3px solid #d8232a;
  border-top: 0px;
}
.toasteryellow {
  border: 3px solid #ffbb1a;
  border-top: 0px;
}

.greenbricks {
  background-color: #58a94d;
}
.redbricks {
  background-color: #d8232a;
}
.yellowbricks {
  background-color: #ffbb1a;
}
.toaster-text {
  font-weight: 900;
}
.blueText {
  color: #364f6e;
  margin: 0px;
}
.yellowText {
  color: #ffbb1a;
  margin: 0px;
}
.redText {
  color: #d8232a;
  margin: 0px;
}
.greenText {
  color: #58a94d;
  margin: 0px;
}

.success-container {
  margin-top: 25px;
  margin-bottom: 25px;
}

.fail-container {
  margin-top: 25px;
  margin-bottom: 25px;
}
.rect {
  color: white;
  text-align: center;
  font-size: 25px;
  padding-top: 40px;
}
.spinner {
  display: inline-block;
  text-align: center;
  width: 250px;
  * {
    line-height: 0;
    box-sizing: border-box;
  }
}
.rect {
  animation: sk-stretchdelay 1s ease-in-out infinite;
}
#toaster {
  transition: all ease-in-out 0.5s;
  animation: open 0.5s ease-in-out infinite;
}

.spinner > div {
  height: 80%;
  width: 8%;
  display: inline-block;
}

.spinner .rect-2 {
  animation-delay: -0.9s;
}

.spinner .rect-3 {
  animation-delay: -0.8s;
}

.spinner .rect-4 {
  animation-delay: -0.7s;
}

.spinner .rect-5 {
  animation-delay: -0.6s;
}

.spinner .rect-6 {
  animation-delay: -0.5s;
}

.spinner .rect-7 {
  animation-delay: -0.4s;
}

.spinner .rect-8 {
  animation-delay: -0.3s;
}

@keyframes sk-stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
}

.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-100%);
  opacity: 0;
}

#control-panel {
  position: fixed;
  top: 500px;
  right: 40%;
  width: 250px;
  flex-wrap: wrap;
  display: flex;
}

button {
  margin: 5px;
}

input {
  margin: 5px;
}

@media screen and (max-width: 800px) {
  #logo {
    width: 150px !important;
  }

  h2 {
    font-size: 20px;
  }

}

@media screen and (max-width: 350px) {
  .toaster {
    width: 300px;
  }
}

@media screen and (max-width: 300px) {
  .toaster {
    width: 250px;
  }
}
</style>
