<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Beans>
 */
class BeansFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'bean' => $this->faker->word(),
            'description' => $this->faker->sentence(),
            'sales_price' => $this->faker->randomFloat(2, 5, 20),
        ];
    }
}
