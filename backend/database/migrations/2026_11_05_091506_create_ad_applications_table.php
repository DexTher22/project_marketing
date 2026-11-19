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
        Schema::create('ad_applications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('advertisement_id')
            ->constrained('advertisements')
            ->cascadeOnDelete();

            $table->foreignId('creator_id')
                ->constrained('creators', 'user_id')
                ->cascadeOnDelete();

            $table->text('message')->nullable();

            $table->string('status', 30)->default('pending');
            $table->timestamps();

            $table->unique(['advertisement_id', 'creator_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ad_applications');
    }
};
