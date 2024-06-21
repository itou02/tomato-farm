
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://itou02.github.io/tomato-farm/App.js$1 [R=301,L]
