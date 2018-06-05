import _ from 'underscore';

export const ProgressWidgetModule = {
  namespaced: true,

  state: {
    items: [],
    currentItemIndex: -1,
    currentGlossaryIndex: 0,
    completedItems: 0,
    openGlossary: false
  },

  getters: {
    currentItem(state, getters) {
      return state.items[state.currentItemIndex];
    },
    currentItemIsLast(state) {
      return state.currentItemIndex === (state.items.length - 1);
    },
    completedPercent(state) {
      return state.completedItems / state.items.length
    }
  },

  mutations: {
    setItems(state, payload) {
      state.items = payload.items;
    },
    setItemIsComplete(state, payload) {
      state.items[payload.item.itemIndex].IsComplete = payload.isComplete;
    },
    updateCompletedItems(state) {
      state.completedItems++;
    },
    setCurrentItemIndex(state, payload) {
      state.currentItemIndex = payload.currentItemIndex;
    },
    toggleGlossary(state) {
      state.openGlossary = !state.openGlossary;
    },
    closeGlossary(state) {
      state.openGlossary = false;
    }
  },
  actions: {
    init(context, payload) {
      context.commit('setCurrentItemIndex', {
        currentItemIndex: 0
      })
      context.commit('setItems', {
        items: payload.items
      });
    },
    //toggles the glossary when carrot is clicked
    toggleGlossary(context) {
      context.commit('toggleGlossary')
    },
    //closes the glossary when new page is loaded
    closeGlossary(context) {
      context.commit('closeGlossary')
    },

    completeItem(context, item) {
      //if no item is given (save and continue)
      if (typeof item === 'undefined' || item === null) {
        item = {
          itemIndex: context.state.currentItemIndex,
        };
      }
      //if current form is incomplete
      if (!context.state.items[context.state.currentItemIndex].IsComplete) {
        context.commit('updateCompletedItems')
      }

      if (!context.state.currentItemIsLast) {
        //Mark item as complete
        context.commit('setItemIsComplete', {
          item,
          isComplete: true
        });

        //Advance to the next thing in the list
        context.dispatch('advance');
      }
    },

    advance(context, payload) {
      var fromGlossary = true;
      //if no item is given (save and continue)
      if (typeof payload === 'undefined' || payload === null) 
      {
        payload = context.state.currentItemIndex;
        fromGlossary = false

        //if current item isnt last, go to next item
        if (!context.getters.currentItemIsLast) 
        {
          payload++;
        }
      }
      //If not all forms are complete
      if (context.state.completedItems !== context.state.items.length) 
      {
        //while the form to which you advanced is already complete
        while (context.state.items[payload].IsComplete) 
        {
          if (!fromGlossary) 
          {
            //if youve completed every form between current and summary, but skipped forms behind you, go to beginning of form stack
            if (payload === context.state.items.length - 1) 
            {
              payload = 0;
            } 
            else 
            {
              payload++;
            }
          }
          else { //not from glossary
            break;
          }
        }
      } 
      else if (!fromGlossary) 
      {
        //when completing your final form, go to summary.  (allow for glossary navigation after all forms are complete)
        payload = context.state.items.length - 1;
      }

      //currentItemIndex = index of item to which you advance
      context.commit(
        'setCurrentItemIndex', {
          currentItemIndex: payload
        });

      // Render new page
      context.dispatch('navigate', null, {
        root: true
      });
    },
  },
};
