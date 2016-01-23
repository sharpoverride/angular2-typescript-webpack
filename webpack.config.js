module.exports = {
	entry: "./src/ts/boot.ts",

	output: {
		path: "./dist/js",
		filename: "client.js"
	},

	module: {
		loaders: [
			{
				test: /\.html$/,
				loader: "html-loader"
			},
			{
				test: /\.ts$/,
				loader: "ts-loader"
			}
		]
	},

	resolve: {
		extensions: ["", ".js", ".ts"]
	}
};
