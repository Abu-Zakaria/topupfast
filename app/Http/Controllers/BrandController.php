<?php

namespace App\Http\Controllers;

use App\Brand;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Config;
use Inertia\Inertia;
use File;

class BrandController extends Controller
{
    public function index()
    {
        $brands = Brand::paginate(10);
        return Inertia::render('Brand/Index',[
            'brands' => $brands,
        ]);
    }

    public function create()
    {
        return Inertia::render('Brand/Create');
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
            $destinationPath = public_path('/brands');
            $image->move($destinationPath, $name);
        }else{
            $name = null;
        }

        Brand::create([
            'name'=>$request->name,
            'logo'=>$name,
        ]);
        
        return redirect()
                ->route('brand.index')
                ->with('success', 'Brand Created successfully!');
    }

    public function show(Brand $brand)
    {
        //
    }

    public function edit(Brand $brand)
    {
        return Inertia::render('Brand/Edit',[
            'brand'=>$brand
        ]);
    }

    public function update(Request $request, Brand $brand)
    {
        $validatedData = $request->validate([
            'name' => 'required',
        ]);

        if ($request->hasFile('logo')) {
            $file_path = public_path().'/brands/'.$brand->logo;
            if(File::exists($file_path)) unlink($file_path);
            $image = $request->file('logo');
            $name = time().'.'.$image->getClientOriginalExtension();
            $destinationPath = public_path('/brands');
            $image->move($destinationPath, $name);
        }else{
            $name = $brand->logo;
        }

        $data = [
            'name'=>$request->name,
            'logo'=>$name,
        ];

        $brand->update($data);
        return redirect()->back()->with('success', 'Brand Updated successfully!');
    }

    public function destroy(Brand $brand)
    {
        $file_path = public_path().'/brands/'.$brand->logo;
        if(File::exists($file_path)) unlink($file_path);
        $brand->forceDelete();return redirect()->back()->with('success', 'Brand Deleted successfully!');
    }

     public function allshopbrand()
    {
        return response()->json(Brand::all());
    }
}
