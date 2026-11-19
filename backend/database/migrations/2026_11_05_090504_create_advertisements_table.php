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
        Schema::create('advertisements', function (Blueprint $table) {
            $table->id();
            $table->foreignId('advertiser_id')
                ->constrained('advertisers', 'user_id')
                ->cascadeOnDelete();
            $table->string('title', 150);
            $table->text('description');
            $table->string('location', 150)->nullable();

            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->timestamp('application_deadline')->nullable();

            $table->decimal('budget', 12, 2)->nullable();
            $table->char('currency', 3)->default('HUF');

            $table->string('status', 30)->default('draft');
            $table->timestamp('published_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('advertisements');
    }
};
