<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Window;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Contracts\Auth\StatefulGuard;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function home(): Factory|View|Application
    {
        return view('home');
    }

    public function userRegister(Request $request): JsonResponse
    {
        $validate = $request->validate([
            'name' => ['required', 'string', 'max:225'],
            'email' => ['required', 'string', 'max:225', 'unique:users'],
            'password' => ['required', 'string', 'min:4'],
        ]);
        $user = $this->create($validate);
        Auth::login($user);
        return response()->json([
            'user' => Auth::user(),
            'message' => 'registration successful'
        ], 200);
    }

    protected function create(array $data)
    {
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
        return $user;
    }

    protected function guard(): Guard|StatefulGuard
    {
        return Auth::guard();
    }

    public function userLogin(Request $request): JsonResponse
    {
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
//            return "true";
            $authUser = auth()->user();
            return response()->json(['message' => 'Login successful', $authUser], 200);
        } else {
            return response()->json(['message' => 'Invaild email or password'], 401);
        }
    }

    public function userLogout(): JsonResponse
    {
        Auth::logout();
        return response()->json(['message' => 'logged Out'], 200);
    }
}
