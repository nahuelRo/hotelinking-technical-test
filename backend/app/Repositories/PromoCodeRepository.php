<?php

namespace App\Repositories;

use App\Models\PromoCode;
use Illuminate\Support\Str;
use App\Repositories\PromoCodeRepositoryInterface;

class PromoCodeRepository implements PromoCodeRepositoryInterface
{
    public function allById(int $userId)
    {
        return PromoCode::with('offer')
            ->whereHas('user', function ($query) use ($userId) {
                $query->where('id', $userId);
            })->get();
    }

    public function generateCodeAssignUser(int $userId, int $offerId)
    {

        $existingPromoCode = PromoCode::where('user_id', $userId)
            ->where('offer_id', $offerId)
            ->first();

        if ($existingPromoCode) {
            return;
        }

        $code = strtoupper(Str::random(6));

        while (PromoCode::where('code', $code)->exists()) {
            $code = strtoupper(Str::random(6));
        }

        $promoCode = PromoCode::create([
            'code' => $code,
            'user_id' => $userId,
            'offer_id' => $offerId,
        ]);

        $promoCode->load('offer', 'offer.promoCodes');

        $result = [
            'created_at' => $promoCode->offer->created_at,
            'description' => $promoCode->offer->description,
            'discount' => $promoCode->offer->discount,
            'id' => $promoCode->offer->id,
            'image_url' => $promoCode->offer->image_url,
            'promo_codes' => $promoCode->offer->promoCodes->toArray(),
            'title' => $promoCode->offer->title,
            'updated_at' => $promoCode->offer->updated_at,
        ];

        return $result;
    }

    public function redeemCode($codeId)
    {
        $promoCode = PromoCode::with('offer')->find($codeId);

        if ($promoCode->redeemed == 1) {
            return;
        }

        $promoCode->redeemed = 1;
        $promoCode->save();

        return $promoCode;
    }
}