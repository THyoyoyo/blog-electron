const cdnMap = {
    css: [
        'https://unpkg.com/element-plus/dist/index.css',
        'https://at.alicdn.com/t/font_2950738_nd696unyx7p.css'
    ],
    js: [
        'https://cdn.jsdelivr.net/npm/vue@next',
        'https://unpkg.com/vuex@next',
        'https://unpkg.com/vue-router@next',
        'https://cdn.bootcdn.net/ajax/libs/axios/0.21.1/axios.min.js',
        'https://unpkg.com/element-plus',
        'https://cdn.bootcss.com/typed.js/2.0.5/typed.js',
        'https://cdn.bootcdn.net/ajax/libs/wangEditor/3.1.1/wangEditor.min.js',

    ]
}
// 需要扩展的资源
// https://cdn.bootcdn.net/ajax/libs/qrcodejs/1.0.0/qrcode.min.js
const externals = {
    "vue": "Vue",
    "vuex": "Vuex",
    "vue-router": "VueRouter",
    "element-plus": "ElementPlus",
    "axios": "axios",
    'wangEditor': 'wangEditor'
}
const regDev = RegExp(/development/);



module.exports = {
    publicPath: "./",
    productionSourceMap: false,
    runtimeCompiler: true,
    chainWebpack: config => {
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')
        // 外部扩展
        config.externals(externals)
        config.plugin('html').tap(args => {
            args[0].title = "THyo";
            args[0].cdn = cdnMap
            return args
        })
    },

    devServer: {
        // disableHostCheck: true
        // 此处开启 https
    }




}