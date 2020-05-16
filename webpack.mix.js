const mix = require('laravel-mix');

mix.js('resources/js/frontend/app.js', 'public/js')
    .sass('resources/sass/frontend/app.scss', 'public/css')
    .webpackConfig({
        output: {
            chunkFilename: 'js/[name].js?id=[chunkhash]',
        }
    });
