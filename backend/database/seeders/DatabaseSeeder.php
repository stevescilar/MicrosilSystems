<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Admin User
        User::updateOrCreate(
            ['email' => 'solutions@microsilsystem.co.ke'],
            [
                'name' => 'Microsil Administrator',
                'password' => Hash::make('Microsil@2026!'),
                'email_verified_at' => now(),
            ]
        );

        // 2. Real-World Engineering Projects
        $projects = [
            [
                'title' => 'TheMoneyCircle (TMC)',
                'slug' => 'the-money-circle',
                'category' => 'Fintech & Wealth Management',
                'badge' => 'Enterprise Platform',
                'summary' => 'High-performance fintech ecosystem with automated peer-to-peer savings circles, real-time ledgers, KYC verification, and M-Pesa automated transaction orchestration.',
                'tech_stack' => ['Laravel 11', 'Flutter', 'PostgreSQL', 'Daraja M-Pesa API', 'Redis Queue'],
                'metrics' => 'Sub-second reconciliations & secure automated payouts',
                'accent_color' => '#03A63D',
                'is_featured' => true,
            ],
            [
                'title' => 'Odo Mobile App',
                'slug' => 'odo-mobile-app',
                'category' => 'Cross-Platform Mobile Application',
                'badge' => 'Mobile Ecosystem',
                'summary' => 'Engineered for iOS & Android with buttery-smooth 60fps UI, offline-first data caching, real-time sync, and intuitive customer onboarding flows.',
                'tech_stack' => ['Flutter', 'Dart', 'REST API', 'Clean Architecture', 'Local SQLite'],
                'metrics' => '99.8% crash-free sessions across diverse devices',
                'accent_color' => '#2F3D58',
                'is_featured' => true,
            ],
            [
                'title' => 'Cryptographic Data & Workflow Automation',
                'slug' => 'cryptographic-workflow-automation',
                'category' => 'Data Engineering & Security',
                'badge' => 'Automation Pipeline',
                'summary' => 'Automated cryptographic salting, multi-stage data hashing (MD5/SHA), CSV ingestion pipelines, and automated reporting scripts eliminating manual error.',
                'tech_stack' => ['Python', 'Cryptography', 'Pandas', 'Scheduled Cron', 'ETL'],
                'metrics' => '100x faster execution than manual workflows',
                'accent_color' => '#33A65B',
                'is_featured' => true,
            ],
            [
                'title' => 'Executive Business Intelligence Suite',
                'slug' => 'executive-business-intelligence',
                'category' => 'Data Consultancy & BI',
                'badge' => 'Data Intelligence',
                'summary' => 'Custom data warehousing and interactive Power BI dashboards translating complex transaction data into actionable revenue and performance metrics.',
                'tech_stack' => ['Power BI', 'DAX', 'SQL Data Warehouse', 'Automated Pipelines'],
                'metrics' => 'Real-time visibility for executive leadership',
                'accent_color' => '#89D9A4',
                'is_featured' => true,
            ],
            [
                'title' => 'Smart Commercial CCTV & Network Topologies',
                'slug' => 'commercial-cctv-network-topologies',
                'category' => 'Physical & Cyber Infrastructure',
                'badge' => 'Security Infrastructure',
                'summary' => 'Enterprise-grade IP surveillance networks, remote multi-site monitoring, biometric access control, and robust enterprise networking setups.',
                'tech_stack' => ['IP Cameras', 'NVR Systems', 'VLANs', 'Cloud Backup', 'Access Control'],
                'metrics' => '24/7 high-definition multi-point coverage',
                'accent_color' => '#2F3D58',
                'is_featured' => true,
            ],
        ];

        foreach ($projects as $project) {
            Project::updateOrCreate(['slug' => $project['slug']], $project);
        }

        // 3. Tech Shop Products
        $products = [
            [
                'name' => 'Hikvision 4-Channel 5MP ColorVu CCTV Kit',
                'slug' => 'hikvision-4ch-5mp-colorvu-kit',
                'category' => 'CCTV & Security',
                'price_kes' => 34500,
                'specs' => ['4x 5MP ColorVu Cameras (24/7 Color)', '1x 4CH DVR/NVR with 1TB HDD', 'Night Vision & Remote Phone Viewing', 'Complete Cabling & Power Supply'],
                'stock_status' => 'In Stock',
                'is_popular' => true,
            ],
            [
                'name' => 'Dahua 8-Channel 4K Ultra HD Commercial Kit',
                'slug' => 'dahua-8ch-4k-kit',
                'category' => 'CCTV & Security',
                'price_kes' => 62000,
                'specs' => ['8x 4K Weatherproof IP Cameras', '8-Channel PoE NVR with 2TB HDD', 'Smart AI Motion & Face Detection', 'Remote Live Monitoring Setup'],
                'stock_status' => 'In Stock',
                'is_popular' => false,
            ],
            [
                'name' => 'MikroTik hEX S Enterprise Gigabit Router',
                'slug' => 'mikrotik-hex-s-router',
                'category' => 'Networking',
                'price_kes' => 14500,
                'specs' => ['5x Gigabit Ethernet Ports', '1x SFP Port for Fiber Connectivity', 'Dual-Core 880MHz CPU & Hardware IPsec', 'RouterOS v7 Enterprise Bandwidth Control'],
                'stock_status' => 'In Stock',
                'is_popular' => true,
            ],
            [
                'name' => 'Ubiquiti UniFi U6+ Long-Range Wi-Fi 6 Access Point',
                'slug' => 'ubiquiti-unifi-u6-plus-ap',
                'category' => 'Networking',
                'price_kes' => 23000,
                'specs' => ['Wi-Fi 6 (802.11ax) Technology', 'Up to 300+ Concurrent Devices', 'PoE Powered with UniFi Cloud Controller', 'High-Gain Antennas for High Wall Penetration'],
                'stock_status' => 'In Stock',
                'is_popular' => false,
            ],
            [
                'name' => 'ZKTeco K40 Biometric Time Attendance & Door Access',
                'slug' => 'zkteco-k40-biometric',
                'category' => 'Biometrics',
                'price_kes' => 19500,
                'specs' => ['Fingerprint + RFID Card + PIN Verification', 'TCP/IP & USB Flash Drive Export', 'Built-in Battery Backup', 'Free Time Attendance Management Software'],
                'stock_status' => 'In Stock',
                'is_popular' => false,
            ],
            [
                'name' => 'Lenovo ThinkPad E14 Gen 5 (Intel Core i7, 16GB, 512GB)',
                'slug' => 'lenovo-thinkpad-e14-gen-5',
                'category' => 'Enterprise Computers',
                'price_kes' => 118000,
                'specs' => ['13th Gen Intel Core i7-1355U', '16GB DDR4 RAM (Expandable to 40GB)', '512GB NVMe PCIe M.2 SSD', '14.0" FHD Anti-Glare Display & Backlit Keyboard'],
                'stock_status' => 'Available on Order',
                'is_popular' => true,
            ],
        ];

        foreach ($products as $product) {
            Product::updateOrCreate(['slug' => $product['slug']], $product);
        }
    }
}
