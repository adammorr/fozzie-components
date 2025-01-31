const path = require('path');

const rootDir = path.join(__dirname, '..', '..');
const sassOptions = require('../../../../config/sassOptions')(rootDir);

// vue.config.js
module.exports = {
    configureWebpack: {
        externals: [
            '@braze/web-sdk',
            'vuex',
            'js-cookie'
        ]
    },
    chainWebpack: config => {
        config.module
            .rule('scss-importer')
            .test(/\.scss$/)
            .use('importer')
            .loader('sass-loader')
            .options({
                ...sassOptions,
                // eslint-disable-next-line quotes
                additionalData: `@use "../assets/scss/common.scss";`
            });
    },
    pluginOptions: {
        lintStyleOnBuild: true
    }
};
