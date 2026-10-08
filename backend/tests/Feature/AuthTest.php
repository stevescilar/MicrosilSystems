<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class AuthTest extends TestCase
{
    use RefreshDatabase;

    public function test_guests_are_redirected_to_login_when_visiting_admin(): void
    {
        $response = $this->get('/admin');

        $response->assertRedirect('/login');
    }

    public function test_login_screen_can_be_rendered(): void
    {
        $response = $this->get('/login');

        $response->assertStatus(200);
        $response->assertSee('Sign in to your account');
    }

    public function test_users_can_authenticate_using_the_login_screen(): void
    {
        $user = User::factory()->create([
            'email' => 'solutions@microsilsystem.co.ke',
            'password' => Hash::make('Microsil@2026!'),
        ]);

        $response = $this->post('/login', [
            'email' => 'solutions@microsilsystem.co.ke',
            'password' => 'Microsil@2026!',
        ]);

        $this->assertAuthenticatedAs($user);
        $response->assertRedirect('/admin');
    }

    public function test_users_can_not_authenticate_with_invalid_password(): void
    {
        $user = User::factory()->create([
            'email' => 'solutions@microsilsystem.co.ke',
            'password' => Hash::make('Microsil@2026!'),
        ]);

        $response = $this->post('/login', [
            'email' => 'solutions@microsilsystem.co.ke',
            'password' => 'wrong-password',
        ]);

        $this->assertGuest();
    }
}
