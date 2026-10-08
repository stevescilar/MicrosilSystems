<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('category');
            $table->string('badge')->nullable();
            $table->text('summary');
            $table->json('tech_stack')->nullable();
            $table->string('metrics')->nullable();
            $table->string('accent_color')->default('#03A63D');
            $table->boolean('is_featured')->default(true);
            $table->string('demo_url')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
