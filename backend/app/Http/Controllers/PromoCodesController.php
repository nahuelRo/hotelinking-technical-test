<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\PromoCodeService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class PromoCodesController extends Controller
{
    public function __construct(
        protected PromoCodeService $promoCodeService
    ) {
    }

    public function index(Request $request)
    {
        try {
            $userId = Auth::user()->id;
            $promoCodes = $this->promoCodeService->allById($userId);
            return response()->json($promoCodes);
        } catch (\Exception $e) {
            Log::error('Error al obtener las ofertas: ' . $e->getMessage());
            return response()->json(['error' => 'Error al obtener las ofertas'], 500);
        }
    }

    public function create(Request $request, $offerId)
    {
        try {
            $userId = Auth::user()->id;

            $promoCode = $this->promoCodeService->generateCodeAssignUser($userId, $offerId);
            return response()->json($promoCode);
        } catch (\Exception $e) {
            Log::error('Error al obtener las ofertas: ' . $e->getMessage());
            return response()->json(['error' => 'Error al obtener las ofertas'], 500);
        }
    }

    public function redeemCode(Request $request, $codeId)
    {
        try {
            $userId = Auth::user()->id;

            $promoCode = $this->promoCodeService->redeemCode($codeId);
            return response()->json($promoCode);
        } catch (\Exception $e) {
            Log::error('Error al obtener las ofertas: ' . $e->getMessage());
            return response()->json(['error' => 'Error al obtener las ofertas'], 500);
        }
    }
}
