const localStorageMock = (function () {
  let store = {};
  return {
    getItem: function(key) {
      return store[key];
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    },
  };
})();

window.localStorage = { value: localStorageMock };

//Object.defineProperty(window, 'localStorage', { value: localStorageMock });