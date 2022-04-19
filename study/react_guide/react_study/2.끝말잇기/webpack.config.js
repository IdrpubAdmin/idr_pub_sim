// 많은 jsx를 하나로 합쳐줌

// path 노트에 내장돼있음
const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin'); // npm run dev 매번하는거 귀찮아서

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', // 실서비스: porduction
    devtool: 'eval',
    resolve: {
        extensions: ['.js','.jsx'] // 엔트리 뒤에 확장자가 없어도 여기 적으면 알아듣게해줌
    },
    entry: {
        app: ['./client'], // 받아올 jsx파일들 적음
    }, // 입력

    module: {
        rules: [{
            test: /\.jsx?/, //규칙을 적용할 파일들
            loader: 'babel-loader', // 바벨을 적용시키겠다
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'], // preset = plugin들의 모음
                plugins: ['@babel/plugin-proposal-class-properties', 'react-refresh/babel']
            },
        }], // 여러개 규칙들이라 배열
    }, // 입력받은 값에 모듈을 더한다
    plugins: [
        new RefreshWebpackPlugin() // npm run dev 매번하는거 귀찮아서
    ],
    output: {
        path: path.join(__dirname, 'dist'), // 경로를 합친다.(현재폴더경로, 안에있는 dist)
        filename: 'app.js', // 합쳐서 app.js파일로 만든다
        publicPath: '/dist',
    }, // 출력
    devServer: {
        devMiddleware: { publicPath: '/dist' },
        static: { directory: path.resolve(__dirname) },
        hot: true
      }
};