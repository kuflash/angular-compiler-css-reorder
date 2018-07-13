# AngularCompiler and CSS reorder

This is reposory showing problem with reoder CSS selector after running AngularCompiler from webpack.

I created 2 dist directories for DEV bundle and PROD bundle.

You can see file main.css in this is directories and found different ordering CSS selectors, but order import CSS files is correct.

Not correct order CSS selectors in dist-prod/main.css

For rebuild bundles run command `npm run build`.