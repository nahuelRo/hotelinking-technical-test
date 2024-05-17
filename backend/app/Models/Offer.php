<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'image_url'];


    public function promoCodes()
    {
        return $this->hasMany(PromoCode::class);
    }
}
