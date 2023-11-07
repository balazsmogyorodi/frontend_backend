<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Writer;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('writers', function (Blueprint $table) {
            $table->id("nev_id");
            $table->string("nev");
            $table->date("szul_datum");
            $table->timestamps();
        });
    

    Writer::create([
        'nev' => 'Nagy Zoltán',
        'szul_datum' => '1978.04.22'

    ]);
    Writer::create([
        'nev' => 'Kis Péter',
        'szul_datum' => '1981.06.13'
    ]);
    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('writers');
    }
};
