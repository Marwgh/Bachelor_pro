<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class QuizzResource extends JsonResource
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
            'quizz_id'=> $this->quizz_id,
            'user_email'=> $this->user_email,
            'quizz_name'=> $this->quizz_name,
            'user_paragraph'=> $this->user_paragraph,
            'team_desciption'=> $this->team_desciption,
            'income'=> $this->income,
            'recruitment_type'=> $this->recruitment_type,
            // 'created_at'=> $this->created_at->format('Y-m-d H:i:s'),

            
        ];

    }
}
