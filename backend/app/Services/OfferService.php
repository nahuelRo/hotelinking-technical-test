<?php

namespace App\Services;

use App\Repositories\OfferRepositoryInterface;

class OfferService
{
    public function __construct(
        protected OfferRepositoryInterface $offerRepository
    ) {
    }

    public function all()
    {
        return $this->offerRepository->all();
    }
}