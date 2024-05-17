<?php

namespace App\Services;

use App\Repositories\PromoCodeRepositoryInterface;

class PromoCodeService
{
    public function __construct(
        protected PromoCodeRepositoryInterface $promoCodeRepository
    ) {
    }

    public function allById(int $userId)
    {
        return $this->promoCodeRepository->allById($userId);
    }

    public function generateCodeAssignUser(int $userId, int $offerId)
    {
        return $this->promoCodeRepository->generateCodeAssignUser($userId, $offerId);
    }

    public function redeemCode($codeId)
    {
        return $this->promoCodeRepository->redeemCode($codeId);
    }
}