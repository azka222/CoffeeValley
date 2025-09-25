<?php
namespace App\Http\Controllers;

use App\Models\Beans;
use Illuminate\Http\Request;

class BeansController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $beans = Beans::where('sales_price', '>', 0)->get();
        return response()->json($beans);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'bean'        => 'required|string|max:255',
            'description' => 'required|string',
            'sales_price' => 'required|numeric|min:0',
        ]);
        $bean = Beans::create($validated);
        return response()->json(['message' => 'Bean created successfully', 'bean' => $bean], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Beans $beans)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Beans $beans)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $validated = $request->validate([
            'id'          => 'required|integer|exists:beans,id',
            'bean'        => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'sales_price' => 'sometimes|numeric|min:0',
        ]);
        $bean = Beans::find($validated['id']);
        if ($bean) {
            $bean->update($validated);
            return response()->json(['message' => 'Bean updated', 'bean' => $bean]);
        } else {
            return response()->json(['message' => 'Bean not found'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Beans $beans)
    {
        //
    }
}
