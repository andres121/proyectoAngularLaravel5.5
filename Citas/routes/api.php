<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/citasMedicas', 'CitasMedicasControllers@getCitas');
Route::get('/citaMedica/{id}', 'CitasMedicasControllers@getCita');
Route::post('/crearCitas', 'CitasMedicasControllers@create');
Route::put('/actualizar/{id}', 'CitasMedicasControllers@update');
Route::delete('/eliminar/{id}', 'CitasMedicasControllers@eliminar');
Route::get('/medicos', 'CitasMedicasControllers@octenerMedico');
    //resource

