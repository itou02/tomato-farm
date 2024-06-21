
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://itou02.github.io/tomato-farm/$1 [R=301,L]
