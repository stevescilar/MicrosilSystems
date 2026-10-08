<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\QuoteRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class QuoteRequestController extends Controller
{
    public function index(): JsonResponse
    {
        $quotes = QuoteRequest::latest()->paginate(25);
        return response()->json($quotes);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['required', 'string', 'max:50'],
            'solution_type' => ['required', 'string', 'max:100'],
            'scale' => ['required', 'string', 'max:50'],
            'addons' => ['nullable', 'array'],
            'estimated_kes' => ['required', 'numeric', 'min:0'],
            'estimated_usd' => ['nullable', 'numeric', 'min:0'],
            'estimated_weeks' => ['nullable', 'integer', 'min:1'],
            'notes' => ['nullable', 'string', 'max:2000'],
        ]);

        $quote = QuoteRequest::create([
            ...$validated,
            'status' => 'pending',
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Project scope & quote request logged. Our technical lead will send the proposal.',
            'data' => $quote,
        ], 201);
    }
}
