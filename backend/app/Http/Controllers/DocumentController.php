<?php
namespace App\Http\Controllers;

use App\Http\Requests\StoreDocumentRequest;
use App\Http\Requests\UpdateDocumentRequest;
use App\Models\Document;
use Illuminate\Http\Request;

class DocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function upload(Request $request)
    {
        $request->validate([
            'file'   => 'required|file|mimes:pdf,doc,docx|max:2048',
            'title'  => 'required|string|max:255',
            'author' => 'required|string|max:255',
        ]);
        $path = null;
        if ($request->file('file')->isValid()) {
            $path              = $request->file('file')->store('documents');
            $document          = new Document();
            $document->title   = $request->input('title');
            $document->author  = $request->input('author');
            $document->content = $path;
            $document->save();
            return response()->json(['message' => 'File uploaded successfully', 'path' => $path], 201);
        }

        return response()->json(['message' => 'Invalid file upload'], 400);
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
    public function store(StoreDocumentRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Document $document)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Document $document)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDocumentRequest $request, Document $document)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Document $document)
    {
        //
    }
}
