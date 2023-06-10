<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quizz extends Model
{
    use HasFactory;
    protected $table = 'quizz';
    protected $fillable = [
        'quizz_name',
        'user_email',
        'user_paragraph',
        'team_desciption',
        'income',
        'recruitment_type',
    ];
}
