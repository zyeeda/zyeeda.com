#!/bin/sh

rm -rf public/

cd website
fis release -opmd default

cd ..
scp -r public/ zyeeda@173.230.132.22:

ssh -t zyeeda@173.230.132.22 'sudo cp -va public/* /usr/share/nginx/www.zyeeda.com; rm -rf public;'
