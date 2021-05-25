<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
   public function index()
    {
        $category = Category::paginate(10);
        return Inertia::render('Category/Index',[
            'category' => $category,
        ]);
    }

    public function create()
    {
        return Inertia::render('Category/Create');
    }

    public function store(Request $request)
    {
        
        $validatedData = $request->validate([
            'name' => 'required',
        ]);
        
        Category::create([
            'name'=>$request->name,
            'logo'=>$request->name,
        ]);

        return redirect()
                ->route('category.index')
                ->with('success', 'Category Created successfully!');
    }

    public function show(Category $category)
    {
        //
    }

    public function edit(Category $category)
    {
        return Inertia::render('Category/Edit',[
            'category'=>$category
        ]);
    }

    public function update(Request $request, Category $category)
    {
        if ($request->has('id')) {
            Category::find($request->input('id'))->update($request->all());
            return redirect()->back()->with('success', 'Category Updated successfully!');
        }
    }

    public function destroy(Category $category)
    {
        $category->forceDelete();return redirect()->back()->with('success', 'Category Deleted successfully!');
    }
}
