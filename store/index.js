import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", [
              {
                id: "1",
                title: "First Part",
                previewText: "Exelent bla-bla-bla !",
                thumbnail:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhAiKRW8GNNPa9WEcLUA8xQG6iE8WIFjiX7lYF5nlTQnm9LHmX"
              },
              {
                id: "2",
                title: "Second Part",
                previewText: "Come to me !",
                thumbnail:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQeMeHcg4uawSLrhj_rkLzsxaJKcRQsphHh3xWeWK9jG5Nqcg"
              }
            ]);
            resolve();
          }, 1000);
        });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
