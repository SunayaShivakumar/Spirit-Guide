# Starter files for MP1
Use the following commands in your vagrant development environment to get this up and running
```bash
git clone https://github.com/uiuc-web-programming/mp1_starter.git
cd mp1_starter
npm install
bower install
grunt compass
grunt uglify
grunt copy:html
grunt
```

For MP1, you should edit the following:
- `source_html/index.html` - all HTML files in the `source_html` folder will be copied to `public` folder and served by the server from there
- `source_sass` folder - all sass files here will be compiled to `public/css/styles.css`
- `js` folder - all javascript files here will be uglified and put in `public/js/script.js`

**Do not edit anything under the `public` folder.** All things there are auto-generated and any changes you make there will get overwritten.
