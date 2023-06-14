<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Tag;
use App\Http\Requests\StoreTagRequest;
use App\Http\Requests\UpdateTagRequest;
use App\Http\Resources\TagResource;


class TagController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response( TagResource::collection(
            Tag::query()->orderBy('id','desc')->get()
        ),200 );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTagRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Tag $tag)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTagRequest $request, Tag $tag)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tag $tag)
    {
        //
    }
}
