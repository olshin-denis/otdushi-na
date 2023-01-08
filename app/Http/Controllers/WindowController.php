<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Window;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WindowController extends Controller
{
    public function cabinet(User $user): JsonResponse
    {
        return response()->json(['windows' => $user->window]);
    }

    public function createWindow(User $user): JsonResponse
    {
        $window = Window::create([
            'user_id' => Auth::user()->id,
            'name'=>\request()->get('name'),
            'profil' => request()->get('profil'),
            'glass_unit' => \request()->get('glass_unit'),
            'fornit' => \request()->get('fornit'),
            'cost' => \request()->get('cost')
        ]);
        return response()->json(['windows' => $window]);
    }

    public function getWindows(): JsonResponse
    {
//        dd("ff");
        $windows = Window::all();
        return response()->json(['windows' => $windows]);
    }

    public function getWindowRedaction(Window $window): JsonResponse
    {
        return response()->json(['window' => $window]);
    }

    public function windowRedaction(Window $window, Request $request): JsonResponse
    {
        $user = User::find($window->user_id);

        $window->fill($request->all());
        $window->   save();
        return response()->json(['window' => $window, 'user' => $user]);
    }

    public function windowDelete(Window $window): JsonResponse
    {
        $user = User::find($window->user_id);

        $window->delete();

        return response()->json(['window' => $window, 'user' => $user]);
    }
}
