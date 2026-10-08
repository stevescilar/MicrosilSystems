<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Microsil System | Operations Login</title>
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
<body class="bg-slate-100 text-slate-800 min-h-screen flex items-center justify-center p-4">
    <div class="max-w-md w-full">
        <!-- Logo and Brand Header -->
        <div class="text-center mb-8">
            <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#03A63D] text-white font-extrabold text-2xl shadow-lg shadow-[#03A63D]/20 mb-3">
                M
            </div>
            <h1 class="text-2xl font-black text-[#2F3D58] tracking-tight">Microsil System</h1>
            <p class="text-xs text-slate-500 mt-1">Management Portal &bull; Enterprise Operations Hub</p>
        </div>

        <!-- Login Card -->
        <div class="bg-white rounded-2xl border border-slate-200/80 shadow-xl shadow-slate-200/50 p-7 sm:p-8">
            <div class="mb-6">
                <h2 class="text-lg font-bold text-[#2F3D58]">Sign in to your account</h2>
                <p class="text-xs text-slate-500 mt-0.5">Enter your administrative credentials to manage leads and operations.</p>
            </div>

            <!-- Error Alerts -->
            @if ($errors->any())
                <div class="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                    <div class="font-bold mb-1">Authentication Error</div>
                    <ul class="list-disc list-inside space-y-0.5">
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif

            <form method="POST" action="{{ route('login.post') }}" class="space-y-4">
                @csrf

                <div>
                    <label for="email" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value="{{ old('email', 'solutions@microsilsystem.co.ke') }}"
                        required
                        autofocus
                        placeholder="admin@microsilsystem.co.ke"
                        class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#03A63D] focus:ring-2 focus:ring-[#03A63D]/20 transition-all"
                    >
                </div>

                <div>
                    <label for="password" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        placeholder="••••••••••••"
                        class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#03A63D] focus:ring-2 focus:ring-[#03A63D]/20 transition-all"
                    >
                </div>

                <div class="flex items-center justify-between pt-1">
                    <label class="flex items-center gap-2 cursor-pointer text-xs text-slate-600">
                        <input
                            type="checkbox"
                            name="remember"
                            class="w-4 h-4 rounded text-[#03A63D] focus:ring-[#03A63D] border-slate-300"
                        >
                        <span>Remember session on this device</span>
                    </label>
                </div>

                <button
                    type="submit"
                    class="w-full py-3 px-4 rounded-xl bg-[#03A63D] hover:bg-[#028A32] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer mt-2"
                >
                    Sign In to Dashboard
                </button>
            </form>

            <div class="mt-6 pt-5 border-t border-slate-100 text-center">
                <div class="text-[11px] text-slate-400">
                    Default Administrator: <span class="font-mono text-slate-600 font-semibold">solutions@microsilsystem.co.ke</span>
                </div>
            </div>
        </div>

        <div class="text-center mt-6 text-xs text-slate-400">
            &copy; 2026 Microsil System Ltd &bull; Nairobi, Kenya
        </div>
    </div>
</body>
</html>

