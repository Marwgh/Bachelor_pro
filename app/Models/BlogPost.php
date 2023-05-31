<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogPost extends Model
{
    use HasFactory;
    protected $table = 'blogposts';
    protected $fillable = [
        'id',
        'user_id',
        'post_title',
        'post_text',
        'post_image',
    ];
}
