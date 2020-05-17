const mix = require('laravel-mix');

mix.js('resources/js/frontend/app.js', 'public/js')
    .sass('resources/sass/frontend/app.scss', 'public/css')
    .webpackConfig({
        output: {
            chunkFilename: 'js/[name].js?id=[chunkhash]',
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    exclude: /node_modules/
                },
                // {
                //     test: /\.tsx?$/,
                //     loader: 'ts-loader',
                //     options: { appendTsSuffixTo: [/\.vue$/] },
                //     exclude: /node_modules/,
                // }
            ]
        },
        resolve: {
            extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx"]
        }
    });
