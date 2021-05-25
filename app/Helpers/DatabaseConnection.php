<?php

namespace App\Helpers;

class DatabaseConnection
{
    public static function setConnection($data)
    {
        $path = base_path('.env');

        if (file_exists($path)) {
            self::setDatabase($path, $data['shop_database']);
            self::setUsername($path, $data['shop_database_user']);
            self::setPassword($path, $data['shop_database_pass']);
        }
    }

    public static function setDatabase($path, $shop_database)
    {
        file_put_contents($path, str_replace(
            'DB_DATABASE='.env('DB_DATABASE'), 'DB_DATABASE='.$shop_database, file_get_contents($path)
        ));
    }

    public static function setUsername($path, $shop_database_user)
    {
        file_put_contents($path, str_replace(
            'DB_USERNAME='.env('DB_USERNAME'), 'DB_USERNAME='.$shop_database_user, file_get_contents($path)
        ));
    }

    public static function setPassword($path, $shop_database_pass)
    {
        file_put_contents($path, str_replace(
            'DB_PASSWORD='.env('DB_PASSWORD'), 'DB_PASSWORD='.$shop_database_pass, file_get_contents($path)
        ));
    }
}
