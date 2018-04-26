import Vue from 'vue';

export const loadData = ({ commit }) => {
  Vue.http.get('data.json')
    .then(response => response.json())
    .then(data => {
      if (data) {
        const stocks = data.stocks;
        const funds = data.funds;
        const stockPortfolio = data.stockPortfolio;
        const day = data.day;
        const portfolio = {
          stockPortfolio,
          funds
        };
        commit('SET_STOCKS', stocks);
        commit('SET_PORTFOLIO', portfolio);
        commit('SET_DAY', day);
      }
    });
};
