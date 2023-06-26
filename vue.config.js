const CompressionWebpackPlugin = require("compression-webpack-plugin");
const zlib = require("zlib");
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const path = require('path');

module.exports = {
    productionSourceMap: false,

    publicPath: process.env.NODE_ENV === 'production'
        ? '/'
        : '/',

    devServer: {
        proxy: {
            '/api': {
                target: 'https://test.test.ru',
                pathRewrite: {'^/api' : '/website/public/1/api'},
                headers: {

                },
                hostRewrite: true,
                autoRewrite: true,
                disableHostCheck: true,
                changeOrigin: true,
                xfwd: false,
                logLevel: "debug",
            }
        }
    },

    chainWebpack: config => {
        config.module
            .rule('svg')
            .exclude
            .add(/.*icons_svg.*\.svg$/);

        config.module
            .rule('svg-icon')
            .test(/.*icons_svg.*\.svg$/)
            .use('vue-svg-loader')
            .loader('./webpack/loaders/svg-replace-loader')
    },

    configureWebpack: {
        plugins: [
            new ImageMinimizerPlugin({
                test: /\.(jpe?g|png|gif|svg)$/i,
                minimizerOptions: {
                    // Lossless optimization with custom option
                    // Feel free to experiment with options for better result for you
                    plugins: [
                        ['gifsicle', { interlaced: false }],
                        ['jpegtran', { progressive: false }],
                        ['optipng', {
                            // Enable Adam7 PNG interlacing on any images that are processed.
                            // Interlaced images look better when they're loaded partially,
                            // but usually interlace makes compression less efficient.
                            // Set to undefined or null to keep the same interlacing as the input image.
                            interlaced: false,
                            // Select an optimization level between 0 and 7.
                            //
                            // The optimization level 0 enables a set of optimization operations that
                            // require minimal effort. There will be no changes to image attributes like
                            // bit depth or color type, and no recompression of existing IDAT datastreams.
                            // The optimization level 1 enables a single IDAT compression trial. The trial chosen
                            // is what. OptiPNG thinks it’s probably the most effective.
                            // The optimization levels 2 and higher enable multiple IDAT compression trials;
                            // the higher the level, the more trials.
                            optimizationLevel: 7
                        }],
                        [
                            'svgo',
                            {
                                plugins: [
                                    {
                                        removeViewBox: false,
                                    },
                                ],
                            },
                        ],
                    ],
                },
            }),

            new ImageMinimizerPlugin({
                test: /\.(png|jpe?g)$/i,
                filename: '[path][name].webp',
                minimizerOptions: {
                    plugins: [
                        ['imagemin-webp', {
                            lossless: true,
                            // Specify the compression method to use, between 0 (fastest) and 6 (slowest).
                            // This parameter controls the trade off between encoding speed and
                            // the compressed file size and quality.
                            method: 6
                        }]
                    ],
                },
                loader: false
            }),

            new CompressionWebpackPlugin({
                filename: "[path][base].gz",
                algorithm: "gzip",
                test: /\.(js|css|html|svg|ico)$/,
                //threshold: 10240,
                minRatio: 0.8,
            }),
            new CompressionWebpackPlugin({
                filename: "[path][base].br",
                algorithm: "brotliCompress",
                test: /\.(js|css|html|svg)$/,
                compressionOptions: {
                    params: {
                        [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
                    },
                },
                //threshold: 10240,
                minRatio: 0.8,
                deleteOriginalAssets: false,
            }),
        ]
    },

    pluginOptions: {
        'style-resources-loader': {
          preProcessor: 'scss',
          'patterns': [
              path.resolve(__dirname, './src/stylesheets/*.scss')
            ]
        }
    }
}
