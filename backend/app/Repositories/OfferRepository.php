<?php

namespace App\Repositories;

use App\Models\Offer;
use Illuminate\Support\Facades\Auth;
use App\Repositories\OfferRepositoryInterface;

class OfferRepository implements OfferRepositoryInterface
{
    public function all()
    {
        $userId = Auth::id();

        $offers = Offer::with([
            'promoCodes' => function ($query) use ($userId) {
                $query->where('user_id', $userId);
            }
        ])->get();

        return $offers;
    }
}