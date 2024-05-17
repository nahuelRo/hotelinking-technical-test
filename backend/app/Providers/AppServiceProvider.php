<?php

namespace App\Providers;

use App\Repositories\OfferRepositoryInterface;
use App\Repositories\OfferRepository;
use App\Services\OfferService;
use App\Repositories\PromoCodeRepositoryInterface;
use App\Repositories\PromoCodeRepository;
use App\Services\PromoCodeService;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        ResetPassword::createUrlUsing(function (object $notifiable, string $token) {
            return config('app.frontend_url') . "/password-reset/$token?email={$notifiable->getEmailForPasswordReset()}";
        });

        $this->app->bind(OfferRepositoryInterface::class, OfferRepository::class);
        $this->app->bind(OfferService::class, function ($app) {
            return new OfferService($app->make(OfferRepositoryInterface::class));
        });


        $this->app->bind(PromoCodeRepositoryInterface::class, PromoCodeRepository::class);
        $this->app->bind(PromoCodeService::class, function ($app) {
            return new PromoCodeService($app->make(PromoCodeRepositoryInterface::class));
        });
    }
}
