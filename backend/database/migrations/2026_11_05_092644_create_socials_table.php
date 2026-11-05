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
        Schema::create('socials', function (Blueprint $table) {
            $table->id();
            $table->foreignId('creator_id')
                ->constrained('creators', 'user_id')
                ->cascadeOnDelete();

            $table->string('platform', 50);
            $table->string('username', 100);
            $table->string('profile_url', 500);
            $table->timestamps();

            $table->unique(['creator_id', 'platform', 'username']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('socials');
    }
};
