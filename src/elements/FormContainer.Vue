<!--
Form container component is just a box in which I load the various forms. 
 It consists of the CSS required to style the element and the vue transition used when a new form loads


vue-router is used to switch between the forms
-->

<template>
  <div id="Form-container">
       <transition
          name="fade"
          mode="out-in"
          @beforeLeave="beforeLeave"
          @enter="enter"
          @afterEnter="afterEnter"
       >
         <router-view/>
       </transition>
  </div>
</template>

<script>
export default {
  name: "Form-container",
 data() {
    return {
      prevHeight: 0,
    };
  },
  methods: {
    //holding onto this for later.  I need the previous and new element heights to transition betweeen them
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    //when the new element enters the dom, get its height, the prevHeight, and transition the container to the new height
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    //resets
    afterEnter(element) {
      element.style.height = 'auto';
    },
  },
};
</script>

<style>

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

#Form-container {
  width: 65%;
  background-color: white;
  margin-right: 3%;
  border-radius: 5px;
  margin-bottom: 50px;
  border: 1px solid lightgray;
  z-index: 1;
}

@media screen and (max-width: 1100px) {
  #Form-container {
    width: 85%;
    font-size: 16px;
  }
}
@media screen and (max-width: 800px) {
  #Form-container {
    width: 100%;
    border-radius: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    font-size: 14px;

  }
}
</style>
