const mix = require('laravel-mix');
const glob = require('glob-all');
require('laravel-mix-purgecss');
const tailwindcss = require('tailwindcss');

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
    })
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.frontend.js')],
    })
    .purgeCss({
        // Will *only* look for views
        paths: () => glob.sync([
            path.join(__dirname, 'resources/views/frontend/**/*.blade.php'),
        ]),
    });
