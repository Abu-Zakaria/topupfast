<?php

namespace App\Http\Controllers;

use App\Notice;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NoticeController extends Controller
{

    public function index()
    {
        $notices = Notice::paginate(10);
        return Inertia::render('Notice/Index',[
            'notices' => $notices,
        ]);
    }

    public function create()
    {
        return Inertia::render('Notice/Create');
    }

    public function store(Request $request)
    {   
        $validatedData = $request->validate([
            'notice' => 'required',
        ]);

        Notice::create([
            'notice'=>$request->notice,
        ]);
        
        return redirect()
                ->route('notice.index')
                ->with('success', 'Notice Created successfully!');
    }

    public function show(Notice $notice)
    {
        //
    }

    public function edit(Notice $note)
    {
        return Inertia::render('Notice/Edit',[
            'notice'=>$notice
        ]);
    }

    public function update(Request $request, Notice $notice)
    {
        $validatedData = $request->validate([
            'notice' => 'required',
            'mode' => 'required',
        ]);

        $notice->notice =$request->notice; 
        $notice->mode  = $request->mode; 

        $notice->update();
        return redirect()->back()->with('success', 'Notice Updated successfully!');
    }

    public function destroy(Notice $notice)
    {
        $notice->forceDelete();return redirect()->back()->with('success', 'Notice Deleted successfully!');
    }


    // api
    public function allnotice(){
        return response()->json(Notice::all());
    }

}
