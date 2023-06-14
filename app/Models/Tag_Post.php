<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag_Post extends Model
{
    use HasFactory;
    protected $table = 'tags_posts';
    protected $fillable = [
        'post_id',
        'tag_id',
    ];
    public $timestamps = false;
}
