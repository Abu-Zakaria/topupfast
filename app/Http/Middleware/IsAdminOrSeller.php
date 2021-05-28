<?php

namespace App\Http\Middleware;

use Closure;

class IsAdminOrSeller
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
        if(in_array(auth()->user()->is_admin, [1, 2]) && auth()->user()->status == 1)
        {
            return $next($request);
        }
        return redirect('/logout');
    }
}
