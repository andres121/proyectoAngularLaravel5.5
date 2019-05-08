<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use \Illuminate\Http\Response;
use Illuminate\Http\Request;
use App\CitasMedicas;

class CitasMedicasControllers extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getCitas()
    {
        //return CitasMedicas::all();
        return DB::table('citasMedicas')
                ->join('medicos' , 'medicos.id' , '=' ,'citasMedicas.medico_id')
                ->select('citasMedicas.id','citasMedicas.enfermedad', 'citasMedicas.hora', 'medicos.menombre')->get();

            
    }
    public function octenerMedico(){
        return DB::table('medicos')
        ->select('id', 'menombre')->get();
    }
    //metodo para obtener una cita
    public function getCita($id)
    {
        return CitasMedicas::find($id);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        return CitasMedicas::create($request->all());
    }

    //eliminar citas
    public function eliminar($id)
    {
     
        return CitasMedicas::where('id',$id)->delete();
    }
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        return CitasMedicas::where('id',$id)->update($request->all());
        

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
