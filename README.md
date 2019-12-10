_s with webpack
===

Features
--------

- [Babel](https://babeljs.io/)
- [ESLint](https://eslint.org/)
- [Autoprefixer](https://www.npmjs.com/package/autoprefixer)
- [Browsersync](https://www.npmjs.com/package/browser-sync)
- [Sass](https://sass-lang.com/)
- [jQuery](https://jquery.com/)
- [Fontawesome](https://fontawesome.com/)

Getting Started
---------------

Copy the `_sww` directory and change the name to something else (like, say, `my-theme`), then do a five-step find and replace on the name in all the templates.

1. Search for `'_sww'` (inside single quotations) to capture the text domain.
2. Search for `_sww_` to capture all the function names.
3. Search for `Text Domain: _sww` in `style.css`.
4. Search for <code>&nbsp;_s_with_webpack</code> (with a space before it) to capture DocBlocks.
5. Search for `_sww-` to capture prefixed handles.

OR

1. Search for: `'_sww'` and replace with: `'my-theme'`.
2. Search for: `_sww_` and replace with: `my_theme_`.
3. Search for: `Text Domain: _sww` and replace with: `Text Domain: my-theme` in `style.css`.
4. Search for: <code>&nbsp;_s_with_webpack</code> and replace with: <code>&nbsp;my_theme</code>.
5. Search for: `_sww-` and replace with: `my-theme-`.

Then, update the stylesheet header in `style.css`, the links in `footer.php` with your own information and rename `_sww.pot` from `languages` folder to use the theme's slug.

Next, configure _Browsersync_ to work with your domain in `webpack.config.js`, and select the browser versions you want to target in `.babelrc` and in `package.json`.

```js
new BrowserSyncPlugin({
  files: '**/*.php',
  proxy: 'http://your-domain'
})
```

Run `npm run dev` for development or `npm run build` for production.

Next, update or delete this readme.

Good luck!
