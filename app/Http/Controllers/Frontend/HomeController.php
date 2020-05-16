<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends CommonController
{
    public function __invoke(Request $request)
    {
        return Inertia::render('Home', [
            'apple' => (object) [],
        ]);
    }
}
