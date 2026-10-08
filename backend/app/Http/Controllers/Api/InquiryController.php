<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Inquiry;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class InquiryController extends Controller
{
    public function index(): JsonResponse
    {
        $inquiries = Inquiry::latest()->paginate(25);
        return response()->json($inquiries);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['required', 'string', 'max:50'],
            'service' => ['nullable', 'string', 'max:100'],
            'message' => ['required', 'string', 'max:5000'],
        ]);

        $inquiry = Inquiry::create([
            ...$validated,
            'status' => 'new',
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Thank you for reaching out to Microsil System. We will contact you shortly.',
            'data' => $inquiry,
        ], 201);
    }
}
