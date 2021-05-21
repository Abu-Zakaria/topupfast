<?php

namespace App\Providers;

use App\Helpers\Helper;
use App\Models\Shop;
use App\Models\Users\Role;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Carbon\CarbonImmutable;
use Illuminate\Support\Collection;
use Illuminate\Pagination\UrlWindow;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Pagination\LengthAwarePaginator;



class AppServiceProvider extends ServiceProvider
{
	/**
	 * Register any application services.
	 *
	 * @return void
	 */
	public function register()
	{

        $this->registerLengthAwarePaginator();
	}

	/**
	 * Bootstrap any application services.
	 *
	 * @return void
	 * @throws \Exception
	 */
	public function boot()
	{
		Schema::defaultStringLength(191);

		Inertia::share('locale', app()->getLocale());

		Inertia::share('language', config('app.languages.' . app()->getLocale()));
		Inertia::share('current_url', url()->current());

		Inertia::share('configData', Helper::applClasses());
		Inertia::share('errors', function () {
			return session()->get('errors') ? session()->get('errors')->getBag('default')->getMessages() : (object) [];
		});

		Inertia::share('success', function () {
			return session()->get('success') ? session()->get('success') : null;
		});

		Inertia::share('error', function () {
			return session()->get('error') ? session()->get('error') : null;
		});

		Inertia::share('auth', function () {
			$user = Auth::user();
			return $user ? $user : null;
		});


		Inertia::share('app', function () {
			if (Auth::check() && !Auth::user()->is_super_admin && !Auth::user()->is_super_moderator) {
				
			}
			return null;
		});

		Inertia::share('accesses', function () {
			$user = Auth::user();
			if ($user) {
				$role_id = $user->role_id;
				$permissions = DB::connection('mysql')->table('permission_role')
					->select('*')
					->where('role_id', $role_id)
					->join('permissions', 'permissions.id', '=', 'permission_role.permission_id', 'left')
					->get();
				return $permissions->pluck('name');
			}
			return [];
		});
	}



	protected function registerLengthAwarePaginator()
    {
        $this->app->bind(LengthAwarePaginator::class, function ($app, $values) {
            return new class(...array_values($values)) extends LengthAwarePaginator {
                public function only(...$attributes)
                {
                    return $this->transform(function ($item) use ($attributes) {
                        return $item->only($attributes);
                    });
                }

                public function transform($callback)
                {
                    $this->items->transform($callback);

                    return $this;
                }

                public function toArray()
                {
                    return [
                        'data' => $this->items->toArray(),
                        'links' => $this->links(),
                    ];
                }

                public function links($view = null, $data = [])
                {
                    $this->appends(Request::all());

                    $window = UrlWindow::make($this);

                    $elements = array_filter([
                        $window['first'],
                        is_array($window['slider']) ? '...' : null,
                        $window['slider'],
                        is_array($window['last']) ? '...' : null,
                        $window['last'],
                    ]);

                    return Collection::make($elements)->flatMap(function ($item) {
                        if (is_array($item)) {
                            return Collection::make($item)->map(function ($url, $page) {
                                return [
                                    'url' => $url,
                                    'label' => $page,
                                    'active' => $this->currentPage() === $page,
                                ];
                            });
                        } else {
                            return [
                                [
                                    'url' => null,
                                    'label' => '...',
                                    'active' => false,
                                ],
                            ];
                        }
                    })->prepend([
                        'url' => $this->previousPageUrl(),
                        'label' => 'Previous',
                        'active' => false,
                    ])->push([
                        'url' => $this->nextPageUrl(),
                        'label' => 'Next',
                        'active' => false,
                    ]);
                }
            };
        });
    }

}
