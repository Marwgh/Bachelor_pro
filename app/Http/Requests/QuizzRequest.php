<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class QuizzRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(QuizzRequest $request): array
    {
        return [
            // 'user_id' => ['required'],
            // 'quizz_name' => ['required', 'string'],
            // 'user_paragraph' => ['required', 'string'],
            // 'team_desciption' => ['required', 'string'],
            // 'income' => ['required', 'string'],
            // 'recruitment_type' => ['required', 'string'],
        ];
    }
}


