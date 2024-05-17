<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Offer>
 */
class OfferFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $discounts = [15, 20, 30];

        return [
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'image_url' => 'https://imprimircarteles.com/wp-content/uploads/2022/10/ofertas_comic.jpg',
            'discount' => $this->faker->randomElement($discounts),
        ];
    }
}
