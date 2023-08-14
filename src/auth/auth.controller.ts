import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';

@Controller('api')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly jwtService: JwtService
    ) { }

    @Post('login')
    async login(@Body() loginDto: any, @Res() res: any) {
        const user = await this.authService.validateUser(loginDto.username, loginDto.password);
        if (!user) {
            return res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Invalid credentials' });
        }
        const payload = { username: user.username, id: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}