<?php

namespace App\Http\Controllers;

use App\Paymentmethod;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Config;
use Inertia\Inertia;
use File;

class PaymentmethodController extends Controller
{
    public function index()
    {
        $paymentmethods = Paymentmethod::paginate(10);
        return Inertia::render('Paymentmethod/Index',[
            'paymentmethods' => $paymentmethods,
        ]);
    }

    public function create()
    {
        return Inertia::render('Paymentmethod/Create');
    }

    public function store(Request $request)
    {   

        $validatedData = $request->validate([
            'name' => 'required',
            'number' => 'required',
            'logo' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($request->hasFile('logo')) {
            $image = $request->file('logo');
            $name = time().'.'.$image->getClientOriginalExtension();
            $destinationPath = public_path('/paymentmethods');
            $image->move($destinationPath, $name);
        }else{
            $name = null;
        }

        Paymentmethod::create([
            'name'=>$request->name,
            'number'=>$request->number,
            'logo'=>$name,
        ]);
        
        return redirect()
                ->route('paymentmethod.index')
                ->with('success', 'Payment method Created successfully!');
    }

    public function edit(Paymentmethod $paymentmethod)
    {
        return Inertia::render('Paymentmethod/Edit',[
            'paymentmethod'=>$paymentmethod
        ]);
    }

    public function update(Request $request, Paymentmethod $paymentmethod)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'number' => 'required',
        ]);

        if ($request->hasFile('logo')) {
            $file_path = public_path().'/paymentmethods/'.$paymentmethod->logo;
            if(File::exists($file_path)) unlink($file_path);
            $image = $request->file('logo');
            $name = time().'.'.$image->getClientOriginalExtension();
            $destinationPath = public_path('/paymentmethods');
            $image->move($destinationPath, $name);
        }else{
            $name = $paymentmethod->logo;
        }

        $data = [
            'name'=>$request->name,
            'number'=>$request->number,
            'logo'=>$name,
        ];

        $paymentmethod->update($data);
        return redirect()->back()->with('success', 'Payment method Updated successfully!');
    }

    public function destroy(Paymentmethod $paymentmethod)
    {
        $file_path = public_path().'/paymentmethods/'.$paymentmethod->logo;
        if(File::exists($file_path)) unlink($file_path);
        $paymentmethod->forceDelete();return redirect()->back()->with('success', 'Payment method Deleted successfully!');
    }

    public function allpaymentmethod($id  = '')
    {

        if($id!=''){
            return response()->json(Paymentmethod::find($id));
        }else{
            return response()->json(Paymentmethod::all());
        }

    }

}
