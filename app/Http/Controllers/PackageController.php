<?php

namespace App\Http\Controllers;

use App\Package;
use App\Product;
use Inertia\Inertia;
use Illuminate\Support\Facades\Request;

class PackageController extends Controller
{
   public function index()
    {

        $id = Request::all('product_id');
        $result = Package::query();

        if ($id['product_id']!=NULL) {
            $result = $result->where('product_id', $id);
        }

        return Inertia::render('Package/Index',[
            'filters'   => Request::all('product_id'),
            'package'    =>  $result->orderBy('id','DESC')
                ->paginate(),
            'product'    => Product::all(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Package/Create');
    }

    public function store()
    {

        $validatedData = Request::validate([
            'name' => 'required',
            'amount' => 'required',
            'extra_fee' => 'required',
            'product_id' => 'required',
        ]);
        
        Package::create([
            'name'         =>Request::all()['name'],
            'amount'    =>Request::all()['amount'],
            'extra_fee'   =>Request::all()['extra_fee'],
            'product_id'   =>Request::all()['product_id'],
        ]);

        return redirect()
                ->route('package.index')
                ->with('success', 'Package Created successfully!');
    }

    public function edit(Package $package)
    {
        return Inertia::render('Package/Edit',[
            'package'=>$package
        ]);
    }

    public function update(Package $package)
    {
        if (Request::has('id')) {
            Package::find(Request::input('id'))->update(Request::all());
            return redirect()->back()->with('success', 'Package Updated successfully!');
        }
    }

    public function destroy(Package $package)
    {
        $package->forceDelete();return redirect()->back()->with('success', 'Package Deleted successfully!');
    }


    public function alltopuppackage($id)
    {
        return response()->json(Package::with('product')->where('product_id',$id)->get());
    }
}
