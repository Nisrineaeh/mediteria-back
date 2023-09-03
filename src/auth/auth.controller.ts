import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { Body, Controller, HttpCode, HttpException, HttpStatus, Post, Res } from '@nestjs/common';


class LoginDto{
    email: string;
    mot_de_passe: string;
}

@Controller('api')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly jwtService: JwtService
    ) { }

    @Post('login')
    @HttpCode(200)
    async login(@Body() loginDto: LoginDto) {
        const user = await this.authService.validateUser(loginDto.email, loginDto.mot_de_passe);
        if (!user) {
            throw new HttpException('Accréditation non valide !', HttpStatus.UNAUTHORIZED);
        }
        const payload = { email: user.email, id: user.id };
        return {
            access_token: this.jwtService.sign(payload),
            user_id: user.id
        };
    }
}