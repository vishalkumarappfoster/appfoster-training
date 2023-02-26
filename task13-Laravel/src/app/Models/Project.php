<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $table = 'projects'; // table name in the database

    protected $primaryKey = 'id'; // primary key name

    protected $fillable = ['Project_name', 'description', 'student_id'];

    // public function student()
    // // {
    // //     return $this->belongsTo(Student::class, 'student_id');
    // // }
}