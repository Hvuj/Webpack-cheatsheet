module.exports = {
	//entry point
	entry: "./src/script-1.js",

	//output point
	output: {
		path: require("path").resolve("./dist"),
		filename: "bundle.js"
	},

	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				},
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader"
				]
			}
		]
	}
};
