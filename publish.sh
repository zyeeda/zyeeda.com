#!/bin/sh

npm run build

scp -r -P 59110 build/ root@112.74.126.227:/var/www/html/zyeeda_com_pre_publish

ssh -t -p 59110 root@112.74.126.227 'rm -rf /var/www/html/zyeeda_com/*; sudo cp -va /var/www/html/zyeeda_com_pre_publish/* /var/www/html/zyeeda_com; rm -rf /var/www/html/zyeeda_com_pre_publish;'
