<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('quote_requests', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('phone');
            $table->string('solution_type');
            $table->string('scale')->default('starter');
            $table->json('addons')->nullable();
            $table->unsignedBigInteger('estimated_kes')->default(0);
            $table->unsignedInteger('estimated_usd')->default(0);
            $table->unsignedInteger('estimated_weeks')->default(2);
            $table->string('status')->default('pending');
            $table->text('notes')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('quote_requests');
    }
};
