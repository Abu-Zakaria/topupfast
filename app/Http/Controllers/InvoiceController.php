<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request;
use App\Invoice;
use App\User;
use App\Product;
use Inertia\Inertia;
use Auth;

class InvoiceController extends Controller
{
    public function index()
    {
        $id = Request::all('order_id');
        $user_id = Request::all('user_id');
        $status = Request::all('status');
        $result = Invoice::with('product')->with('user');

        if(auth()->user()->is_admin == 2)
        {
            $result->where('user_id', auth()->user()->id);
        }

        if ($id['order_id']!=NULL) {
            $result = $result->where('id', $id);
        }

        if ($status['status']!=NULL) {
            $result = $result->where('status', $status);
        }

        if ($user_id['user_id']!=NULL) {
            $result = $result->where('user_id', $user_id);
        }

        return Inertia::render('Invoice/Index', [
            'filters'   => Request::all('user_id'),
            'invoice'     => $result->orderBy('id','DESC')
                ->paginate(),
        ]);

    }

    public function create()
    {
        return Inertia::render('Package/Create');
    }

    public function store()
    {

    }

    public function edit(Package $package)
    {
        return Inertia::render('Package/Edit',[
            'package'=>$package
        ]);
    }

    public function update()
    {
        $aaaaaaaaaaaa  = Invoice::find(Request::all()['id']);
        if(Request::all()['status']=='cancel'){

            $product = Product::find($aaaaaaaaaaaa->product_id);


            $product->quantity = $product->quantity+1;
            $product->update();

            $user   = User::find($aaaaaaaaaaaa->user_id);
            $user->wallet = $user->wallet+$aaaaaaaaaaaa->price;
            $user->update();
        }
        $aaaaaaaaaaaa->status=Request::all()['status'];
        $aaaaaaaaaaaa->details=Request::all()['details'];
        $aaaaaaaaaaaa->update();
        return redirect()->back()->with('success', 'Invoice Update successfully!');
    }

    public function destroy(Package $package)
    {
        $package->forceDelete();return redirect()->back()->with('success', 'Invoice Deleted successfully!');
    }
}
