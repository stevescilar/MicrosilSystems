<?php

use App\Http\Controllers\Api\InquiryController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\QuoteRequestController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Public API Endpoints for Microsil System
Route::prefix('v1')->group(function () {
    // Inquiries / Contact
    Route::post('/inquiries', [InquiryController::class, 'store']);
    Route::get('/inquiries', [InquiryController::class, 'index']);

    // Quote & Scope Estimator Requests
    Route::post('/quotes', [QuoteRequestController::class, 'store']);
    Route::get('/quotes', [QuoteRequestController::class, 'index']);

    // Portfolio & Verified Projects
    Route::get('/projects', [ProjectController::class, 'index']);
    Route::get('/projects/{slug}', [ProjectController::class, 'show']);

    // Tech Shop Products
    Route::get('/products', [ProductController::class, 'index']);
    Route::get('/products/{slug}', [ProductController::class, 'show']);
});
