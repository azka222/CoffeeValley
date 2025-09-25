<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Beans extends Model
{
    /** @use HasFactory<\Database\Factories\BeansFactory> */
    use HasFactory;

    protected $fillable = ['bean', 'description', 'sales_price'];
    protected $table = 'beans';
}
