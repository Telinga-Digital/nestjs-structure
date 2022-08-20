import {
  Controller,
  Get,
  HttpCode,
  Post,
  Request,
  UseGuards,
  HttpStatus,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller({
  version: '1',
})
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('auth')
  @HttpCode(HttpStatus.OK)
  async auth(@Body() req: { email: string; password: string }) {
    return this.authService.validateUser(req.email, req.password);
  }

  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  async me(@Request() req) {
    return this.authService.me(req.user);
  }
}
