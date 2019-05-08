<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCitasMedicasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        

            Schema::create('citasMedicas', function($table)
            {
                $table->increments('id');
                $table->integer('medico_id')->unsigned();
                $table->foreign('medico_id')->references('id')->on('medicos');
                $table->string('enfermedad',100);
                $table->string('hora',10);
                $table->timestamps();
              
            });
             
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('citasMedicas');
    }
}
