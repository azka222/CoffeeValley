<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Distributor extends Model
{
    /** @use HasFactory<\Database\Factories\DistributorFactory> */
    use HasFactory;
    protected $fillable = ['name', 'city', 'country', 'email', 'phone'];
    protected $table = 'distributors';
}
