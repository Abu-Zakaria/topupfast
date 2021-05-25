<?php

namespace App\Http\Controllers;

use App\Product;
use App\Brand;
use App\Category;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;
use File;
class ProductController extends Controller
{
    public function index()
    {
        $product = Product::paginate(10);
        return Inertia::render('Product/Index',[
            'product' => $product,
            'brand' => Brand::all(),
            'category' => Category::all(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Product/Create');
    }

    public function store()
    {
        $validatedData = Request::validate([
            'name' => 'required',
            'brand_id' => 'required',
            'category_id' => 'required',
            'buy_price' => 'required',
            'sale_price' => 'required',
            'logo' => 'required',
        ]);

        if (Request::hasFile('logo')) {
            $image = Request::file('logo');
            $name = time().'.'.$image->getClientOriginalExtension();
            $destinationPath = public_path('/products');
            $image->move($destinationPath, $name);
        }else{
            $name = null;
        }

        Product::create([
            'name'         =>Request::all()['name'],
            'brand_id'     =>Request::all()['brand_id'],
            'category_id'  =>Request::all()['category_id'],
            'description'  =>Request::all()['description'],
            'tag_line'     =>Request::all()['tag_line'],
            'logo'         =>$name,
            'buy_price'    =>Request::all()['buy_price'],
            'sale_price'   =>Request::all()['sale_price'],
            'is_shop'      =>Request::all()['is_shop'],
            'quantity'     =>Request::all()['quantity'],
            'type'         =>Request::all()['type'],
            'seller_commission' =>Request::all()['seller_commission'],
        ]);

        return redirect()
                ->route('product.index')
                ->with('success', 'Product Created successfully!');
    }

    public function edit(Product $product)
    {
        return Inertia::render('Product/Edit',[
            'product'=>$product
        ]);
    }

    public function update(Product $product)
    {
        if (Request::hasFile('logo')) {
            $file_path = public_path().'/products/'.$product->logo;
            if(is_file($file_path) && File::exists($file_path)) unlink($file_path);
            $image = Request::file('logo');
            $name = time().'.'.$image->getClientOriginalExtension();
            $destinationPath = public_path('/products');
            $image->move($destinationPath, $name);
        }else{
            $name = $product->logo;
        }

        $data = [
            'name'         =>Request::all()['name'],
            'brand_id'     =>Request::all()['brand_id'],
            'category_id'  =>Request::all()['category_id'],
            'description'  =>Request::all()['description'],
            'tag_line'     =>Request::all()['tag_line'],
            'logo'         =>$name,
            'buy_price'    =>Request::all()['buy_price'],
            'sale_price'   =>Request::all()['sale_price'],
            'is_shop'      =>Request::all()['is_shop'],
            'quantity'     =>Request::all()['quantity'],
            'type'         =>Request::all()['type'],
            'seller_commission' =>Request::all()['seller_commission'],
        ];

        $product->update($data);
        return redirect()->back()->with('success', 'Product Updated successfully!');
    }

    public function destroy(Product $product)
    {
        $file_path = public_path().'/products/'.$product->logo;
        if(is_file($file_path) && File::exists($file_path)) unlink($file_path);
        $product->forceDelete();return redirect()->back()->with('success', 'Product Deleted successfully!');
    }

    public function alltopupproduct()
    {
        return response()->json(Product::where('is_shop',1)->get());
    }

    public function allshopproduct()
    {
        return response()->json(Product::where('is_shop',0)->get());
    }

    public function singleproduct($id)
    {
        return response()->json(Product::find($id));
    }
}
