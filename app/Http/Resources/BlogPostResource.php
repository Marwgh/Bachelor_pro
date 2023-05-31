<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BlogPostResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'post_id'=> $this->post_id,
            'user_id'=> $this->user_id,
            'post_title'=> $this->post_title,
            'post_text'=> $this->post_text,
            'post_image'=> $this->post_image,
            // 'created_at'=> $this->created_at->format('Y-m-d H:i:s'),

            
        ];

    }
}
