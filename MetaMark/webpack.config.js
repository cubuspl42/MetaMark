const path = require("path");
const ShebangPlugin = require("webpack-shebang-plugin");

module.exports = {
    entry: "./src/main.ts",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                include: [
                    path.resolve(__dirname, "src"),
                    path.resolve(__dirname, "generated_src"),
                ],
            },
            {
                test: /\.txt$/,
                use: "raw-loader",
                include: [
                    path.resolve(__dirname, "runtime"),
                ],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    target: "node",
    plugins: [
        new ShebangPlugin(),
    ],
    devtool: "source-map",
};
