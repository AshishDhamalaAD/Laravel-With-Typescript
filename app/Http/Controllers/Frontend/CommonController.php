<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class CommonController extends Controller
{
    public function __construct()
    {
        Inertia::setRootView('frontend.index');

        Inertia::share('query', function () {
            return (object) Request::all();
        });
    }
}
