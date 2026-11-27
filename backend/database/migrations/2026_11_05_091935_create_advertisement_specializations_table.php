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
        Schema::create('advertisement_specializations', function (Blueprint $table) {
            $table->foreignId('advertisement_id')
            ->constrained('advertisements')
            ->cascadeOnDelete();

            $table->foreignId('specialization_id')
                ->constrained('specializations')
                ->cascadeOnDelete();

            $table->primary(['advertisement_id', 'specialization_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('advertisement_specializations');
    }
};
