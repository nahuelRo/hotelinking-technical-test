<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OffersController;
use App\Http\Controllers\PromoCodesController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function () {

    // Promo Codes
    Route::get('/my-promo-codes', [PromoCodesController::class, 'index']);

    Route::post('/promo-codes/generate/{offerId}', [PromoCodesController::class, 'create']);

    Route::put('/promo-codes/{codeId}/redeem', [PromoCodesController::class, 'redeemCode']);

});


// Offers
Route::get('/offers', [OffersController::class, 'index']);