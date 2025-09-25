<?php

use App\Http\Controllers\BeansController;
use App\Http\Controllers\DistributorController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\LoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [LoginController::class, 'logout']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

});

Route::middleware('guest')->group(function () {
    Route::post('/login', [LoginController::class, 'login']);
    Route::get('/beans/index', [BeansController::class, 'index']);
    Route::get('/distributors/index', [DistributorController::class, 'index']);
    Route::post('/distributors/update/', [DistributorController::class, 'update']);
    Route::post('/distributors/store', [DistributorController::class, 'store']);
    Route::post('/file/upload', [DocumentController::class, 'upload']);

});
