<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'category',
        'price_kes',
        'specs',
        'stock_status',
        'is_popular',
    ];

    protected $casts = [
        'specs' => 'array',
        'price_kes' => 'float',
        'is_popular' => 'boolean',
    ];
}
