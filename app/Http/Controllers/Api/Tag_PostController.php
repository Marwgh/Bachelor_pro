<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Tag_Post;
use App\Http\Requests\StoreTag_PostRequest;
use App\Http\Requests\UpdateTag_PostRequest;
use App\Http\Resources\Tag_PostResource;


class Tag_PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response( Tag_PostResource::collection(
            Tag_Post::query()->orderBy('post_id','desc')->get()
        ),200 );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTag_PostRequest $request)
    {
        $data = $request->validated();
        $post = Tag_Post::create($data);

        return response(new Tag_PostResource($post) , 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Tag_Post $tag_Post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTag_PostRequest $request, Tag_Post $tag_Post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tag_Post $tag_Post)
    {
        //
    }
}
