# little-zebra-foundation

Folders:

<ul>
<li>index.html - the entry point.</li>
<li>assets - All the images and fonts/icons.</li>
<li>dist - Compiled css/js and vendor js.  </li>
<li>src - All the pre-compiled code.</li>
</ul>


GULP
Run the code at the top of gulpfile.js to install all the necessary gulp file.
Commands:
gulp styles - compiles scss files in src/sass and bootstrap files, and add them into dist/css folder.  Edit bootstrap-4.scss to include the files used for the site.
gulp scripts - compiles js files in src/js, and add them into dist/js.  Edit the gulp file to include the bootstrap js files the site needs.  The bootstrap js goes into dist/vendor folder.
gulp - compiles all the javascript files and scss files

