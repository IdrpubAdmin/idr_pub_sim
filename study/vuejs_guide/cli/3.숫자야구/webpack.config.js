const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require('path');

module.exports = {
    // 개발
    mode: 'development',
    // 배포 
    // mode: 'production',

    // 개발 : 빌드하는 속도가 빨라짐
    devtool: 'eval',
    // 배포
    // devtool: 'hidden-source-map',

    // 확장자 처리해주는 기능
    resolve: {
        extensions: ['.js', '.vue'],
    },

    entry: {
        // 하나로 합쳐질 파일의 이름
        app: path.join(__dirname, 'main.js'),
    },
    module: {
        // 읽지 못하는 파일을 확장자가 해결해줌 
        rules: [{
            // vue 파일을 발견할시
            test: /\.vue$/,
            // loader가 해결해줌
            loader: 'vue-loader'
        }],
    },
    plugins: [new VueLoaderPlugin()],
    output: {
        // 합쳐진 파일이 저장되는 곳
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    },
} 