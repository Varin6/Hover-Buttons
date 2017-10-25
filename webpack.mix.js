let mix              = require('laravel-mix');
let LiveReloadPlugin = require('webpack-livereload-plugin');

mix
    .disableNotifications()
    .setPublicPath('../Hover-Buttons')
    .setResourceRoot('../Hover-Buttons')
    .options(
        {
            processCssUrls: false,
            postCss: [
                require('autoprefixer')({
                    browsers: ['last 5 versions'],
                    cascade: false
                })
            ]
        })
    .sass('scss/hoverbuttons.scss', 'css/hoverbuttons.css')
    .sass('demo/css/style.scss', 'demo/css/style.css')
    .combine(
        [
            'css/hoverbuttons.css',
            'demo/css/style.css'
        ], 'demo/css/core.css'
    )

;
