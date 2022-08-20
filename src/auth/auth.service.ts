import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            email: 'Not Found',
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const isValidPassword = await compare(pass, user.password);

    if (!isValidPassword) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            password: 'Incorrect Password',
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const jwtToken = await this.jwtService.sign({
      id: user.id,
    });

    return {
      accessToken: jwtToken,
    };
  }

  async me(user: User): Promise<User> {
    return this.usersService.findById(user.id);
  }
}
