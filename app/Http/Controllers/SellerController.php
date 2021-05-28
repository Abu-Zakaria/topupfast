<?php

namespace App\Http\Controllers;

use App\Order;
use Illuminate\Http\Request;

class SellerController extends Controller
{
    public function acceptOrder(Request $request)
    {
        if($request->accept_id != 0)
        {
            return [
                'success' => false,
                'message' => "Someone else have accepted this order!"
            ];
        }

        $order = Order::find($request->id);

        $seller_commision = ($order->package->product->seller_commission);

        $update = $order->update([
            'accept_id' => auth()->user()->id,
            'seller_commission' => $seller_commision,
        ]);

        if($update)
        {
            return [
                'success' => true,
                'message' => "Successfully accepted the order"
            ];
        }
        return [
            'success' => false,
            'message' => "An error occured while processing your request."
        ];
    }
}
