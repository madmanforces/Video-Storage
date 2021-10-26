const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

// video player를 디자인하기 위해 base.pug에 있는 main.js 대신 watch.pug에 다른 js.file을 추가 해줘야함 videoPlayer.js라는 파일을 생성후 엔트리에 메인과 비디오플레이어로 나눠 저장
// 시작점이 .entry라면 마지막에 도달점은 output이니 아웃풋에는 main.js 대신 엔트리의 이름에 맞게 작동하도록 webpack이 지원하는 [name] 이라는 변수를 써준다. 
module.exports = {
  entry: {
    main: "./src/client/js/main.js",
    VideoPlayer: "./src/client/js/videoPlayer.js",
    recorder: "./src/client/js/recorder.js",
  },
  mode: "development",
  watch: true,
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
  ],
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "assets"),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};