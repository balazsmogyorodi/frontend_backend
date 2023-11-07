<?php

namespace App\Http\Controllers;

use App\Models\Writer;
use Illuminate\Http\Request;

class WriterController extends Controller
{

    public function index(){
        $writers = response()->json(Writer::all());
        return $writers;
    }

    public function store(Request $request){
        $writer = new Writer();
        $writer->nev = $request->nev;
        $writer->szul_datum = $request->szul_datum;
        $writer->save();
    }

    //
}
