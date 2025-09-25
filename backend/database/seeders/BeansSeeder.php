<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Beans;

class BeansSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      Beans::create([
          'bean' => 'Arabica',
          'description' => 'Smooth and fruity with a hint of chocolate.',
          'sales_price' => 12.99,
      ]);
      Beans::create([
          'bean' => 'Robusta',
          'description' => 'Strong and bold with a nutty flavor.',
          'sales_price' => 9.99,
      ]);
      Beans::create([
          'bean' => 'Liberica',
          'description' => 'Unique smoky flavor with floral notes.',
          'sales_price' => 14.99,
      ]);
      Beans::create([
          'bean' => 'Excelsa',
          'description' => 'Tart and fruity with a dark, mysterious profile.',
          'sales_price' => 13.49,
      ]);
      
    }
}
