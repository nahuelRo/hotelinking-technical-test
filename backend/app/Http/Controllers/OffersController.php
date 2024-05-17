<?php

namespace App\Http\Controllers;

use App\Services\OfferService;
use Illuminate\Support\Facades\Log;

class OffersController extends Controller
{

    public function __construct(
        protected OfferService $offerService
    ) {
    }

    public function index()
    {
        try {
            $offers = $this->offerService->all();
            return response()->json($offers);
        } catch (\Exception $e) {
            Log::error('Error al obtener las ofertas: ' . $e->getMessage());
            return response()->json(['error' => 'Error al obtener las ofertas'], 500);
        }
    }
}
