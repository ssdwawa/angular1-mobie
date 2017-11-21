/*
* @Author: Rosen
* @Date:   2017-05-08 15:28:19
* @Last Modified by:   Rosen
* @Last Modified time: 2017-05-30 16:50:46
*/
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var HtmlWebpackPlugin = require('html-webpack-plugin');
// 环境变量配置，dev / online
var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';
// 获取html-webpack-plugin参数的方法 
var getHtmlConfig = function (name, title) {
    return {
        template: './src/view/' + name + '.html',
        filename: 'view/' + name + '.html',
        title: title,
        inject: true,
        hash: true,
        chunks: ['common', name]
    };
};
var getHtmlMainConfig = function (name, title) {
    return {
        template: './src/view/main/' + name + '.html',
        filename: 'view/main/' + name + '.html',
        title: title,
        inject: true,
        hash: true,
        chunks: ['common', name]
    };
};

var getHtmlWorkConfig = function (name, title) {
    return {
        template: './src/view/work-part/' + name + '.html',
        filename: 'view/work-part/' + name + '.html',
        title: title,
        inject: true,
        hash: true,
        chunks: ['common', name]
    };
};

var getHtmlPoConfig = function (name, title) {
    return {
        template: './src/view/position/' + name + '.html',
        filename: 'view/position/' + name + '.html',
        title: title,
        inject: true,
        hash: true,
        chunks: ['common', name]
    };
};
var getHtmlCoConfig = function (name, title) {
    return {
        template: './src/view/company/' + name + '.html',
        filename: 'view/company/' + name + '.html',
        title: title,
        inject: true,
        hash: true,
        chunks: ['common', name]
    };
};
var getHtmlSeConfig = function (name, title) {
    return {
        template: './src/view/search/' + name + '.html',
        filename: 'view/search/' + name + '.html',
        title: title,
        inject: true,
        hash: true,
        chunks: ['common', name]
    };
};


var config = {
    entry: {
        'common': ['./src/pages/common/common.js'],
        'index': ['./src/pages/index.js'],
    },
    output: {
        path: './dist',
        publicPath: '/dist',
        filename: 'js/[name].js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            { test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=100&name=resource/[name].[ext]' },
            { test: /\.string$/, loader: 'html-loader' },
            { test: /\.html$/, loader: 'html-withimg-loader' },
            { test: /\.json$/,loader: 'json-loader?data/[name].json' }
        ]
    },
    devServer: {
        proxy: [
            {
                context: ['/*','/users/*','/images/*','/work/*'],
                target: 'http://localhost:3000',
                secure: false,
                changeOrigin: true
            }
        ]
    },
    // In webpack.config.js

    resolve: {
        alias: {
            node_modules: __dirname + '/node_modules',
            util: __dirname + '/src/util',
            pages: __dirname + '/src/pages',
            service: __dirname + '/src/service',
            image: __dirname + '/src/image',
            vendor: __dirname + '/src/vendor',
        }
    },
    plugins: [
        // 独立通用模块到js/base.js
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/base.js'
        }),
        // 把css单独打包到文件里
        new ExtractTextPlugin("css/[name].css"),
        // html模板的处理
        new HtmlWebpackPlugin(getHtmlConfig('index', '首页')),
        new HtmlWebpackPlugin(getHtmlConfig('home', '首页')),
        new HtmlWebpackPlugin(getHtmlConfig('reg', '首页')),


        new HtmlWebpackPlugin(getHtmlPoConfig('headBar', '首页')),
        new HtmlWebpackPlugin(getHtmlPoConfig('position', '职位')),
        new HtmlWebpackPlugin(getHtmlPoConfig('positionInfo')),
        new HtmlWebpackPlugin(getHtmlPoConfig('company')),



        new HtmlWebpackPlugin(getHtmlMainConfig('head', '模板')),
        new HtmlWebpackPlugin(getHtmlMainConfig('foot', '模板')),
        new HtmlWebpackPlugin(getHtmlMainConfig('positionList', '模板')),
        new HtmlWebpackPlugin(getHtmlMainConfig('main', '模板')),

        new HtmlWebpackPlugin(getHtmlCoConfig('companyInfo', '模板')),


        new HtmlWebpackPlugin(getHtmlSeConfig('index', '模板')),
        new HtmlWebpackPlugin(getHtmlSeConfig('search-head', '模板')),
        new HtmlWebpackPlugin(getHtmlWorkConfig('foot','模版')),
        new HtmlWebpackPlugin(getHtmlWorkConfig('head','模版')),
        new HtmlWebpackPlugin(getHtmlWorkConfig('main','模版')),
        new HtmlWebpackPlugin(getHtmlWorkConfig('most-page','模版')),
        new HtmlWebpackPlugin(getHtmlWorkConfig('pushJob','模版')),
        new HtmlWebpackPlugin(getHtmlWorkConfig('page-info','模版')),
        new HtmlWebpackPlugin(getHtmlWorkConfig('pushJob-jobList','模版')),
        new HtmlWebpackPlugin(getHtmlWorkConfig('pushJob-newJob','模版')),
        
    ]
};

if ('dev' === WEBPACK_ENV) {
    config.entry.common.push('webpack-dev-server/client?http://localhost:8001/');
}

module.exports = config;