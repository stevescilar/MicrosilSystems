<?php

use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;

Route::get('/', [AdminController::class, 'index'])->name('admin.home');
Route::get('/admin', [AdminController::class, 'index'])->name('admin.dashboard');
