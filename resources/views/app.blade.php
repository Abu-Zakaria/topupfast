<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
	<title>{{ env('APP_NAME') }}</title>
	<link href="{{ asset('css/app.css') }}" rel="stylesheet" />

	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600">
	<link rel="stylesheet" href="{{ asset('vendors/css/vendors.min.css') }}">
	<link rel="stylesheet" href="{{ asset('vendors/css/ui/prism.min.css') }}">
	{{-- Theme Styles --}}
	<link rel="stylesheet" href="{{ asset('css/bootstrap.css') }}">
	<link rel="stylesheet" href="{{ asset('css/bootstrap-extended.css') }}">
	<link rel="stylesheet" href="{{ asset('css/colors.css') }}">
	<link rel="stylesheet" href="{{ asset('css/components.css') }}">
	<link rel="stylesheet" href="{{ asset('css/themes/dark-layout.css') }}">
	<link rel="stylesheet" href="{{ asset('css/themes/semi-dark-layout.css') }}">
	{{-- {!! Helper::applClasses() !!} --}}
	<meta name="csrf-token" content="{{ csrf_token() }}">
	@php
		$configData = Helper::applClasses();
	@endphp

	{{-- Page Styles --}}
	@if($configData['mainLayoutType'] === 'horizontal')
		<link rel="stylesheet" href="{{ asset('css/core/menu/menu-types/horizontal-menu.css') }}">
	@endif
	<link rel="stylesheet" href="{{ asset('css/core/menu/menu-types/vertical-menu.css') }}">
	<link rel="stylesheet" href="{{ asset('css/core/colors/palette-gradient.css') }}">
	{{-- Page Styles --}}

	{{-- Laravel Style --}}
	<link rel="stylesheet" href="{{ asset('css/custom-laravel.css') }}">
	{{-- Custom RTL Styles --}}
	@if($configData['direction'] === 'rtl')
		<link rel="stylesheet" href="{{ asset('css/custom-rtl.css') }}">
	@endif
	@routes
</head>
<body class="vertical-layout vertical-menu-modern 2-columns {{ $configData['blankPageClass'] }} {{ $configData['bodyClass'] }} {{($configData['theme'] === 'light') ? '' : $configData['theme'] }} {{ $configData['navbarType'] }} {{ $configData['sidebarClass'] }} {{ $configData['footerType'] }} " data-menu="vertical-menu-modern" data-col="2-columns">
@inertia

@if (app()->isLocal())
	<script src="http://localhost:3000/browser-sync/browser-sync-client.js"></script>
@endif

{{-- Vendor Scripts --}}
<script src="{{ asset('vendors/js/vendors.min.js') }}"></script>
<script src="{{ asset('vendors/js/ui/prism.min.js') }}"></script>

<script src="{{ asset('js/app.js') }}" defer></script>
</body>
</html>
