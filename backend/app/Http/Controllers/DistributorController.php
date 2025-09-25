<?php
namespace App\Http\Controllers;

use App\Models\Distributor;
use Illuminate\Http\Request;

class DistributorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $distributors = Distributor::all();
        return response()->json($distributors);
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
        $distributor          = new Distributor();
        $distributor->name    = $request->input('name');
        $distributor->city    = $request->input('city');
        $distributor->country = $request->input('country');
        $distributor->email   = $request->input('email');
        $distributor->phone   = $request->input('phone');
        $distributor->save();

        return response()->json(['data' => $distributor]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Distributor $distributor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Distributor $distributor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $data        = $request->all();
        $distributor = Distributor::find($data['id']);
        if ($distributor) {
            $distributor->update($data);
            return response()->json(['message' => 'Distributor updated successfully', 'distributor' => $distributor]);
        } else {
            return response()->json(['message' => 'Distributor not found'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Distributor $distributor)
    {
        //
    }
}
