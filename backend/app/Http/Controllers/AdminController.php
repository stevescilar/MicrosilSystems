<?php

namespace App\Http\Controllers;

use App\Models\Inquiry;
use App\Models\Product;
use App\Models\Project;
use App\Models\QuoteRequest;
use Illuminate\Http\Request;
use Illuminate\View\View;

class AdminController extends Controller
{
    public function index(): View
    {
        $quotes = QuoteRequest::latest()->take(15)->get();
        $inquiries = Inquiry::latest()->take(15)->get();
        $projects = Project::latest()->get();
        $products = Product::latest()->get();

        $stats = [
            'total_quotes' => QuoteRequest::count(),
            'total_inquiries' => Inquiry::count(),
            'total_projects' => Project::count(),
            'total_products' => Product::count(),
            'estimated_pipeline_kes' => QuoteRequest::sum('estimated_kes'),
        ];

        return view('admin.dashboard', compact('quotes', 'inquiries', 'projects', 'products', 'stats'));
    }
}

