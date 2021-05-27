FROM php:7.3-fpm
RUN apt-get update -y
RUN apt-get -y install gcc make autoconf libc-dev pkg-config libzip-dev
RUN apt-get install -y \
	git \
	curl \
	libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip
RUN apt-get install -y software-properties-common
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get -y install nodejs

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

ENV UID 1000
ENV USER cynax

RUN useradd -G www-data,root -u ${UID} -d /home/${USER} ${USER}
RUN mkdir -p /home/${USER}/.composer && \
    chown -R ${USER}:${USER} /home/${USER}

WORKDIR /var/www/html

USER ${USER}
