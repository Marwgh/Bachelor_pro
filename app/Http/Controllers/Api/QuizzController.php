<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Quizz;
use App\Http\Requests\StoreQuizzRequest;
use App\Http\Requests\UpdateQuizzRequest;
use App\Http\Requests\QuizzRequest;
use Illuminate\Support\Facades\Auth;



class QuizzController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(StoreQuizzRequest $request)
    {
        
        /** @var \App\Models\Quizz $quizz */

        $data = $request->validated();
        $quizz = Quizz::create([
            'user_id' => $data['user_id'],
            'quizz_name' => $data['quizz_name'],
            'user_paragraph' => $data['user_paragraph'],
            'team_desciption' => $data['team_desciption'],
            'income' => $data['income'],
            'recruitment_type' => $data['recruitment_type'],
        ]);
        return response(compact('quizz'),200);

    
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store()
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Quizz $quizz)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Quizz $quizz)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateQuizzRequest $request, Quizz $quizz)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Quizz $quizz)
    {
        //
    }
}
