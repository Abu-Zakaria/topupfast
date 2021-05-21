<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\App;

class SetLocale
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (request('lang')) {
          session()->put('lang', request('lang'));
          $language = request('lang');
        } elseif (session('lang')) {
          $language = session('lang');
        } elseif (config('app.locale')) {
          $language = config('app.locale');
        }

        if (isset($language) && config('app.languages.' . $language)) {
          App::setLocale($language);
        }

        return $next($request);
    }
}
