const path = require('path')
const uglify = require('uglifyjs-webpack-plugin')

const isDev = process.argv.find(function(e) {
    return e === "-d"
}) === "-d";

config = {
    entry: './src/js/app.js',
    watch: isDev,
    output: {
        path: path.resolve('./dist/js'),
        filename: 'bundle.js',
        publicPath: "js/"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: ['babel-loader']
        }]
    },
    plugins: []
}

if (!isDev) {
    config.plugins.push(new uglify({
        sourceMap: true
    }))
    config.devtool = "source-map"

} else {
    config.devtool = "cheap-module-eval-source-map"
}

module.exports = config