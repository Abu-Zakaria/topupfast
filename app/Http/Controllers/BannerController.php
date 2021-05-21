<?php

namespace App\Http\Controllers;

use App\Banner;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Config;
use Inertia\Inertia;
use File;

class BannerController extends Controller
{
    public function index()
    {
        $banners = Banner::paginate(10);
        return Inertia::render('Banner/Index',[
            'banners' => $banners,
        ]);
    }

    public function create()
    {
        return Inertia::render('Banner/Create');
    }

    public function store(Request $request)
    {   

        $validatedData = $request->validate([
            'name' => 'required',
            'logo' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($request->hasFile('logo')) {
            $image = $request->file('logo');
            $name = time().'.'.$image->getClientOriginalExtension();
            $destinationPath = public_path('/banners');
            $image->move($destinationPath, $name);
        }else{
            $name = null;
        }

        Banner::create([
            'name'=>$request->name,
            'logo'=>$name,
        ]);
        
        return redirect()
                ->route('banner.index')
                ->with('success', 'Banner Created successfully!');
    }

    public function edit(Banner $banner)
    {
        return Inertia::render('Banner/Edit',[
            'banner'=>$banner
        ]);
    }

    public function update(Request $request, Banner $banner)
    {
        $validatedData = $request->validate([
            'name' => 'required',
        ]);


        if ($request->hasFile('logo')) {
            $file_path = public_path().'/banners/'.$banner->logo;
            if(File::exists($file_path)) unlink($file_path);
            $image = $request->file('logo');
            $name = time().'.'.$image->getClientOriginalExtension();
            $destinationPath = public_path('/banners');
            $image->move($destinationPath, $name);
        }else{
            $name = $banner->logo;
        }

        $data = [
            'name'=>$request->name,
            'logo'=>$name,
        ];

        $banner->update($data);
        return redirect()->back()->with('success', 'Banner Updated successfully!');
    }

    public function destroy(Banner $banner)
    {
        $file_path = public_path().'/banners/'.$banner->logo;
        if(File::exists($file_path)) unlink($file_path);
        $banner->forceDelete();return redirect()->back()->with('success', 'Banner Deleted successfully!');
    }



    // api
    public function allbanner(){
        return response()->json(Banner::all());
    }
}
