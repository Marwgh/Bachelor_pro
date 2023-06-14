<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('quizz', function (Blueprint $table) {
            $table->id('quizz_id');
            $table->increments('user_email');
            $table->string('quizz_name');
            $table->string('user_paragraph');
            $table->string('team_desciption');
            $table->string('income');
            $table->string('recruitment_type');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
