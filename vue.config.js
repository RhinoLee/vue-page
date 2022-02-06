module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/css/_variable.scss";
          @import "@/assets/css/main.scss";
        `
      }
    }
  }
};