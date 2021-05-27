//DRV 19086
// WEB 2021
module.exports = {
    mode: "development",
    module: {
        rules: [{test: /\.jsx?$/, use: ["babel-loader", "eslint-loader"]},]
    },
    devServer: {contentBase: "dist", overlay:false}
}