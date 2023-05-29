<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quizz extends Model
{
    use HasFactory;
    protected $table = 'quizz_table';
    protected $fillable = [
        'quizz_name',
        'user_id',
        'user_paragraph',
        'team_desciption',
        'income',
        'recruitment_type',
    ];
}
