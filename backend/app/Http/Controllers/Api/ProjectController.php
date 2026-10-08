<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\JsonResponse;

class ProjectController extends Controller
{
    public function index(): JsonResponse
    {
        $projects = Project::where('is_featured', true)
            ->latest()
            ->get();

        return response()->json([
            'success' => true,
            'data' => $projects,
        ]);
    }

    public function show(string $slug): JsonResponse
    {
        $project = Project::where('slug', $slug)->firstOrFail();

        return response()->json([
            'success' => true,
            'data' => $project,
        ]);
    }
}
