<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Microsil System | Operations & Management Hub</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        :root {
            --brand-navy: #2F3D58;
            --brand-green: #03A63D;
            --brand-mint: #89D9A4;
            --brand-tint: #EEFFF8;
        }
    </style>
</head>
<body class="bg-slate-50 text-slate-800 min-h-screen">
    <!-- Header -->
    <header class="bg-[#2F3D58] text-white border-b border-slate-700 px-6 py-4 sticky top-0 z-50 shadow-md">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-lg bg-[#03A63D] flex items-center justify-center font-bold text-white shadow">
                    M
                </div>
                <div>
                    <h1 class="font-extrabold text-base leading-tight tracking-wide">Microsil System</h1>
                    <p class="text-[11px] text-[#89D9A4] font-medium">Operations &amp; Lead Management Hub</p>
                </div>
            </div>
            <div class="flex items-center gap-3 text-xs">
                <span class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white border border-white/10">
                    <span class="w-2 h-2 rounded-full bg-[#03A63D] animate-pulse"></span>
                    API Active &bull; Laravel 11/Herd
                </span>
                <div class="flex items-center gap-2 pl-2 border-l border-white/20">
                    <span class="text-white/80 font-medium hidden md:inline">{{ Auth::user()->name ?? 'Administrator' }}</span>
                    <form method="POST" action="{{ route('logout') }}">
                        @csrf
                        <button type="submit" class="px-2.5 py-1 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-200 border border-red-500/30 font-semibold transition-colors cursor-pointer">
                            Sign Out
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <!-- Top Metrics Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Estimator Pipeline</div>
                <div class="text-2xl font-black text-[#03A63D] mt-1">
                    KES {{ number_format($stats['estimated_pipeline_kes']) }}
                </div>
                <div class="text-[11px] text-slate-400 mt-1">From incoming quote scopes</div>
            </div>

            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Quote Requests</div>
                <div class="text-2xl font-black text-[#2F3D58] mt-1">
                    {{ $stats['total_quotes'] }}
                </div>
                <div class="text-[11px] text-slate-400 mt-1">Interactive calculator leads</div>
            </div>

            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Contact Inquiries</div>
                <div class="text-2xl font-black text-[#2F3D58] mt-1">
                    {{ $stats['total_inquiries'] }}
                </div>
                <div class="text-[11px] text-slate-400 mt-1">Direct website messages</div>
            </div>

            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Live Catalog</div>
                <div class="text-2xl font-black text-[#2F3D58] mt-1">
                    {{ $stats['total_projects'] }} Case Studies / {{ $stats['total_products'] }} Products
                </div>
                <div class="text-[11px] text-slate-400 mt-1">Active showcased assets</div>
            </div>
        </div>

        <!-- Section 1: Recent Quote Estimator Requests -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                    <h2 class="font-bold text-base text-[#2F3D58]">Recent Scope &amp; Quote Requests</h2>
                    <p class="text-xs text-slate-500">Incoming submissions from the Next.js interactive calculator</p>
                </div>
                <span class="text-xs font-semibold px-2.5 py-1 rounded bg-[#EEFFF8] text-[#03A63D]">
                    Endpoint: POST /api/v1/quotes
                </span>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full text-left text-xs">
                    <thead class="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200 uppercase tracking-wider">
                        <tr>
                            <th class="px-6 py-3">Client</th>
                            <th class="px-6 py-3">Phone &amp; Email</th>
                            <th class="px-6 py-3">Solution Domain</th>
                            <th class="px-6 py-3">Scale</th>
                            <th class="px-6 py-3">Est. Budget</th>
                            <th class="px-6 py-3">Status</th>
                            <th class="px-6 py-3">Date</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 text-slate-700">
                        @forelse($quotes as $quote)
                            <tr class="hover:bg-slate-50">
                                <td class="px-6 py-3.5 font-bold text-[#2F3D58]">{{ $quote->name }}</td>
                                <td class="px-6 py-3.5">
                                    <div>{{ $quote->phone }}</div>
                                    <div class="text-slate-400 text-[11px]">{{ $quote->email }}</div>
                                </td>
                                <td class="px-6 py-3.5 font-medium">{{ ucfirst($quote->solution_type) }}</td>
                                <td class="px-6 py-3.5">{{ ucfirst($quote->scale) }}</td>
                                <td class="px-6 py-3.5 font-extrabold text-[#03A63D]">
                                    KES {{ number_format($quote->estimated_kes) }}
                                </td>
                                <td class="px-6 py-3.5">
                                    <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">
                                        {{ ucfirst($quote->status) }}
                                    </span>
                                </td>
                                <td class="px-6 py-3.5 text-slate-400">{{ $quote->created_at->format('M d, H:i') }}</td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="7" class="px-6 py-8 text-center text-slate-400">
                                    No quote requests received yet. Submissions from the website calculator will populate here automatically.
                                </td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Section 2: Verified Case Studies & Projects -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                    <h2 class="font-bold text-base text-[#2F3D58]">Showcased Real-World Projects</h2>
                    <p class="text-xs text-slate-500">Live projects powering Microsil&apos;s portfolio (TMC, Odo, Automations, BI)</p>
                </div>
                <span class="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-600">
                    Endpoint: GET /api/v1/projects
                </span>
            </div>

            <div class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                @foreach($projects as $p)
                    <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#89D9A4] transition-all">
                        <div class="flex items-center justify-between gap-2 mb-2">
                            <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-[#EEFFF8] text-[#03A63D]">
                                {{ $p->badge }}
                            </span>
                            <span class="text-[10px] text-slate-400 font-mono">{{ $p->slug }}</span>
                        </div>
                        <h3 class="font-bold text-sm text-[#2F3D58]">{{ $p->title }}</h3>
                        <p class="text-xs text-slate-600 mt-1 line-clamp-2">{{ $p->summary }}</p>
                        <div class="mt-3 flex flex-wrap gap-1">
                            @foreach($p->tech_stack ?? [] as $t)
                                <span class="px-1.5 py-0.5 rounded text-[10px] bg-white border border-slate-200 text-slate-600">
                                    {{ $t }}
                                </span>
                            @endforeach
                        </div>
                    </div>
                @endforeach
            </div>
        </div>

        <!-- Section 3: Tech Shop Hardware Inventory -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                    <h2 class="font-bold text-base text-[#2F3D58]">Tech Shop Catalog &amp; Hardware</h2>
                    <p class="text-xs text-slate-500">Hardware inventory for CCTV, networking, biometrics and computers</p>
                </div>
                <span class="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-600">
                    Endpoint: GET /api/v1/products
                </span>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full text-left text-xs">
                    <thead class="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200 uppercase tracking-wider">
                        <tr>
                            <th class="px-6 py-3">Hardware Item</th>
                            <th class="px-6 py-3">Category</th>
                            <th class="px-6 py-3">Price (KES)</th>
                            <th class="px-6 py-3">Stock Status</th>
                            <th class="px-6 py-3">Popular</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 text-slate-700">
                        @foreach($products as $prod)
                            <tr class="hover:bg-slate-50">
                                <td class="px-6 py-3 font-bold text-[#2F3D58]">{{ $prod->name }}</td>
                                <td class="px-6 py-3">{{ $prod->category }}</td>
                                <td class="px-6 py-3 font-extrabold text-[#03A63D]">
                                    KES {{ number_format($prod->price_kes) }}
                                </td>
                                <td class="px-6 py-3">
                                    <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EEFFF8] text-[#03A63D]">
                                        {{ $prod->stock_status }}
                                    </span>
                                </td>
                                <td class="px-6 py-3">
                                    @if($prod->is_popular)
                                        <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">Featured</span>
                                    @else
                                        <span class="text-slate-400 text-[10px]">Standard</span>
                                    @endif
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </main>
</body>
</html>

