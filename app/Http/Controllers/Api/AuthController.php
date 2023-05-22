<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function signup (SignupRequest $request) {
        $data = $request->validated();
        /** @var \App\Models\User $user */

        $user = User::create([
            'firstName' => $data['firstName'],
            'lastName' => $data['lastName'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ]);
    }
    public function login (LoginRequest $request) {
        $credentials = $request->validated();
        if (!Auth::attemp($credentials)){
            return response([
                'message'=> 'Provided email or password is incorrect'
            ]);
        }
        /** @var User $user*/
        $user = Auth::user();
        $token =  $user->createToken('main')->plainTextToken;
    }
    public function logout (Request $request) {

        /** @var User $user*/
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response('',204);
    }
}
