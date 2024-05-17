<?php

namespace App\Repositories;

interface PromoCodeRepositoryInterface
{
    public function allById(int $userId);
    public function generateCodeAssignUser(int $userId, int $offerId);
    public function redeemCode($codeId);
}