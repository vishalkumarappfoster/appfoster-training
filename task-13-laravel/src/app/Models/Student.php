<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $table = 'students'; // table name in the database

    protected $primaryKey = 'student_id'; // primary key  name

    protected $fillable = ['name', 'email', 'gender']; 
}