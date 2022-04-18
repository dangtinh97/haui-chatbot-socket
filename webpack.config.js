

const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js',
    },
    resolve:{
        extensions: ['.ts', '.js', '.json'],
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                use: 'ts-loader',
                test: /\.ts?$/,
                exclude: /node_modules/
            }
        ]
    },

    externals: [nodeExternals()],

    target: 'node',

    mode: 'development',
};