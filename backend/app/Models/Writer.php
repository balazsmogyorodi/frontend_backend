<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Writer extends Model
{

    protected $primarykey = ["nev_id"];
    protected $fillable = [
        
        "nev",
        "szul_datum"
    ];


    use HasFactory;
}
