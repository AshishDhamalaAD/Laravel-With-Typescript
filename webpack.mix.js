const mix = require('laravel-mix');
const glob = require('glob-all');
require('laravel-mix-purgecss');
const tailwindcss = require('tailwindcss');

mix.setPublicPath(path.normalize('public/frontend'))
    .js('resources/js/frontend/app.js', 'public/frontend/js')
    .sass('resources/sass/frontend/app.scss', 'public/frontend/css')
    .webpackConfig({
        output: {
            chunkFilename: 'js/[name].js?id=[chunkhash]',
            publicPath: '/frontend/'
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
            extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx"],
            alias: {
                '@front': path.resolve(__dirname, 'resources/js/frontend'),
            }
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
