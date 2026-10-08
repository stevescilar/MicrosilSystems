<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = Product::query();

        if ($request->has('category') && $request->category !== 'All') {
            $query->where('category', $request->category);
        }

        $products = $query->orderBy('is_popular', 'desc')
            ->latest()
            ->get();

        return response()->json([
            'success' => true,
            'data' => $products,
        ]);
    }

    public function show(string $slug): JsonResponse
    {
        $product = Product::where('slug', $slug)->firstOrFail();

        return response()->json([
            'success' => true,
            'data' => $product,
        ]);
    }
}
