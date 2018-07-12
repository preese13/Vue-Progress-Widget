

export const ToasterModule = {
    namespaced: true,
  
    state: {
        showToaster: false,
        timer: null,
        bricks: true,
        color: "green",
        success: false,
        fail: false,
        title: null,
        message: null,
        successMessage: null,
        failMessage: null,
      },
    
      mutations: {
    
        resetToaster(state) {
          state.showToaster = false;
          state.color = "green";
          state.success = false;
          state.fail = false;
          state.title = null;
          state.message = null;
          state.successMessage = null;
          state.failMessage = null;
        },
    
        toggleToaster(state) {
          state.showToaster = !state.showToaster;
        },
    
        setTimer(state, payload) {
          state.timer = payload.time;
        },
        
        toggleBricks(state, payload) {
          state.bricks = payload.bricks;
        },
    
        setToasterTitle(state, payload) {
          state.title = payload.title;
        },
    
        setToasterColor(state, payload) {
          state.color = payload.color;
        },
        
        toggleToasterSuccess(state, payload) {
          state.success = payload.success;
        },
        
        toggleToasterFail(state, payload) {
          state.fail = payload.fail;
        },
    
        setToasterMessage(state, payload) {
          state.message = payload.message;
        },
    
        setToasterSuccessMessage(state, payload) {
          state.successMessage = payload.successMessage;
        },
    
        setToasterFailMessage(state, payload) {
          state.failMessage = payload.failMessage;
        },
      },
    
      actions: {
    
        toggleToaster(context) {
          context.commit('toggleToaster');
        },
    
        setTimer(context, payload) {
          context.commit('setTimer', payload);
        },
    
        toggleBricks(context, payload) {
          context.commit('toggleBricks', payload);
        },
    
        setToasterColor(context, payload) {
          context.commit('setToasterColor', payload);
        },
    
        toggleToasterSuccess(context, payload) {
          context.commit('toggleToasterSuccess', payload);
        },
    
        toggleToasterFail(context, payload) {
          context.commit('toggleToasterFail', payload);
        },
        
        toggleBricks(context, payload) {
          context.commit('toggleBricks', payload);
        },
    
        setToasterMessage(context, payload) {
          context.commit('setToasterMessage', payload);
        },
    
        setToasterTitle(context, payload) {
          context.commit('setToasterTitle', payload);
        },
    
        setToasterSuccessMessage(context, payload) {
          context.commit('setToasterSuccessMessage', payload);
        },
    
        setToasterFailMessage(context, payload) {
          context.commit('setToasterFailMessage', payload);
        },
    
        resetToaster(context) {
          context.commit('resetToaster');
        },
      }
  };
  