<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends CommonController
{
    public function index(Request $request)
    {
        return Inertia::render('Blogs', [
            'blogs' => [],
        ]);
    }
}
