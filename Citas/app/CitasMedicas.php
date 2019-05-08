<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CitasMedicas extends Model
{
    protected $table = "citasMedicas";

    protected $fillable = [
        'medico_id', 'enfermedad', 'hora'
    ];
}
