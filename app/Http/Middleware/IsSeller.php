<?php

namespace App\Http\Middleware;

use Closure;

class IsSeller
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
        if(auth()->user()->is_admin == 2 && auth()->user()->status == 1)
        {
            return $next($request);
        }
        return redirect('/logout');
    }
}
