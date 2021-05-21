<?php

namespace App\Http\Controllers;

use App\Tenant;
use Illuminate\Support\Facades\Config;
use Inertia\Inertia;
	
class LandingPageController extends Controller
{
    public function index()
    {
        Tenant::getTenant();
        Config::set('database.default', 'mysql');
        return Inertia::render('Auth/Subscription');
    }
}
