
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://itou02.github.io/tomato-farm/index.html$1 [R=301,L]
