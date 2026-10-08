<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuoteRequest extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'solution_type',
        'scale',
        'addons',
        'estimated_kes',
        'estimated_usd',
        'estimated_weeks',
        'status',
        'notes',
    ];

    protected $casts = [
        'addons' => 'array',
        'estimated_kes' => 'integer',
        'estimated_usd' => 'integer',
        'estimated_weeks' => 'integer',
    ];
}
