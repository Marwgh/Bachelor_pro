<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Quizz;
use App\Http\Requests\StoreQuizzRequest;
use App\Http\Requests\UpdateQuizzRequest;
use App\Http\Requests\QuizzRequest;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\QuizzResource;




class QuizzController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return response( QuizzResource::collection(
            Quizz::query()->orderBy('quizz_id','desc')->get()
        ),200 );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(StoreQuizzRequest $request)
    {
        
        /** @var \App\Models\Quizz $quizz */

        $data = $request->validated();
        $quizz = Quizz::create([
            'user_email' => $data['user_email'],
            'quizz_name' => $data['quizz_name'],
            'user_paragraph' => $data['user_paragraph'],
            'team_desciption' => $data['team_desciption'],
            'income' => $data['income'],
            'recruitment_type' => $data['recruitment_type'],
        ]);
        return response(compact('quizz'),200);

    
    }
    
    /**
     * Display the specified resource.
     */
    public function show(Quizz $quizz)
    {
        return response(new QuizzResource($quizz) , 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    // public function store()
    // {
    //     //
    // }


    /**
     * Show the form for editing the specified resource.
     */
    // public function edit(Quizz $quizz)
    // {
    //     //
    // }

    /**
     * Update the specified resource in storage.
     */
    // public function update(UpdateQuizzRequest $request, Quizz $quizz)
    // {
    //     //
    // }

    /**
     * Remove the specified resource from storage.
     */
    // public function destroy(Quizz $quizz)
    // {
    //     //
    // }
}
