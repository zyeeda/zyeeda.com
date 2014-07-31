#!/usr/bin/env bash

echo ">>> build-nginx.sh <<<"

echo "Installing prerequisite packages..."
apt-get install -y \
    build-essential \
    libpcre3 libpcre3-dev \
    libssl-dev \
    libxslt-dev \
    libgeoip-dev \
    libpam-dev \
    libexpat-dev \
    zlib1g-dev
echo "Done!"

echo "Downloading files..."
mkdir download
cd download

NGINX_VERSION=1.7.3
wget -nv http://nginx.org/download/nginx-${NGINX_VERSION}.tar.gz

NAXSI_VERSION=0.53-2
wget -nv -O naxsi-${NAXSI_VERSION}.tar.gz https://github.com/nbs-system/naxsi/archive/${NAXSI_VERSION}.tar.gz

NPS_VERSION=1.8.31.4
wget -nv -O pagespeed-${NPS_VERSION}.tar.gz https://github.com/pagespeed/ngx_pagespeed/archive/v${NPS_VERSION}-beta.tar.gz
wget -nv -O psol-${NPS_VERSION}.tar.gz https://dl.google.com/dl/page-speed/psol/${NPS_VERSION}.tar.gz

cd ..
echo "Done!"

echo "Unzipping..."
mkdir nginx
tar -xzf download/nginx-${NGINX_VERSION}.tar.gz -C nginx --strip-components=1

mkdir -p modules/naxsi
tar -xzf download/naxsi-${NAXSI_VERSION}.tar.gz -C modules/naxsi --strip-components=1

mkdir -p modules/pagespeed
tar -xzf download/pagespeed-${NPS_VERSION}.tar.gz -C modules/pagespeed --strip-components=1
tar -xzf download/psol-${NPS_VERSION}.tar.gz -C modules/pagespeed/
echo "Done!"

echo "Building..."
adduser --system --no-create-home --disabled-login --disabled-password --group nginx

cd nginx
./configure \
    --prefix=/usr/share/nginx \
    --sbin-path=/usr/sbin \
    --conf-path=/etc/nginx/nginx.conf \
    --error-log-path=/var/log/nginx/error.log \
    --pid-path=/run/nginx.pid \
    --lock-path=/var/lock/nginx.lock \
    --user=nginx \
    --group=nginx \
    --with-ipv6 \
    --with-http_ssl_module \
    --with-http_spdy_module \
    --with-http_realip_module \
    --with-http_addition_module \
    --with-http_xslt_module \
    --with-http_geoip_module \
    --with-http_sub_module \
    --with-http_dav_module \
    --with-http_gzip_static_module \
    --with-http_auth_request_module \
    --with-http_secure_link_module \
    --with-http_stub_status_module \
    --without-http_autoindex_module \
    --http-log-path=/var/log/nginx/access.log \
    --http-client-body-temp-path=/var/lib/nginx/body \
    --http-proxy-temp-path=/var/lib/nginx/proxy \
    --http-fastcgi-temp-path=/var/lib/nginx/fastcgi \
    --http-uwsgi-temp-path=/var/lib/nginx/uwsgi \
    --http-scgi-temp-path=/var/lib/nginx/scgi \
    --without-mail_pop3_module \
    --without-mail_imap_module \
    --without-mail_smtp_module \
    --with-cc-opt="-g -O2 -fstack-protector --param=ssp-buffer-size=4 -Wformat -Werror=format-security -D_FORTIFY_SOURCE=2" \
    --with-ld-opt="-Wl,-Bsymbolic-functions -Wl,-z,relro" \
    --with-pcre-jit \
    --with-debug \
    --add-module=/home/vagrant/modules/naxsi/naxsi_src \
    --add-module=/home/vagrant/modules/pagespeed
make
make install

mkdir /var/lib/nginx
mkdir /etc/nginx/conf.d
mkdir /etc/nginx/sites-available
mkdir /etc/nginx/sites-enabled

cp -f /vagrant/config/etc/nginx/nginx.conf /etc/nginx/nginx.conf
cp /vagrant/config/etc/nginx/proxy_params /etc/nginx/
cp /vagrant/config/etc/nginx/conf.d/* /etc/nginx/conf.d/
cp /vagrant/config/etc/nginx/sites-available/* /etc/nginx/sites-available/
ln -s /etc/nginx/sites-available/zyeeda.com.conf /etc/nginx/sites-enabled/zyeeda.com.conf
cd ..
echo "Done!"

echo "Cleanning..."
rm -rf download/
rm -rf nginx/
rm -rf modules/
echo "Done!"

echo "Starting..."
cp /vagrant/config/etc/init.d/nginx /etc/init.d/
/usr/sbin/update-rc.d -f nginx defaults
/etc/init.d/nginx start
echo "Done!"
