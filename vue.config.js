module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-page/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/css/_variable.scss";
        `
      }
    }
  }
};