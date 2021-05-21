<?php

namespace App\Providers;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\File;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class LanguageServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {

        Inertia::share('language', config('app.languages.'.app()->getLocale()));

        Inertia::share('lang', function () {
          $path = resource_path('lang/'. app()->getLocale() .'.json');
          if (!file_exists($path)) {
            return [];
          }
          return json_decode(file_get_contents($path), true);
        });
    }
}
