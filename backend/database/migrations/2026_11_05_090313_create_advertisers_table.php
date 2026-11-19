<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('advertisers', function (Blueprint $table) {
            $table->foreignId('user_id')
                ->primary()
                ->constrained('users')
                ->cascadeOnDelete();

            $table->string('name', 150);
            $table->text('description')->nullable();
            $table->string('logo_path', 500)->nullable();
            $table->string('email', 254)->nullable();
            $table->string('phone', 30)->nullable();
            $table->string('website_url', 500)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('advertisers');
    }
};
