<?php
namespace Database\Seeders;

use App\Models\Distributor;
use Illuminate\Database\Seeder;

class DistributorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Distributor::create([
            'name' => 'Global Coffee Distributors',
            'city' => 'New York',
        ]);
        Distributor::create([
            'name' => 'Bean World',
            'city' => 'Los Angeles',
        ]);
        Distributor::create([
            'name' => 'Coffee Supply Co.',
            'city' => 'Chicago',
        ]);
        Distributor::create([
            'name' => 'Brew Masters',
            'city' => 'Houston',
        ]);

    }
}
