import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, RegisterDto } from './dto/user.dto';
import { PrismaService } from '../../../prisma/Prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService : JwtService,
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ){}


  async register(registDto : RegisterDto){
    const {name, email, password} = registDto;

    const user = {
      name, email, password
    }

    return user;
  }

  async login(loginDto : LoginDto){
    const {email, password} = loginDto;
    const user = {
      email, 
      password
    }

    return user;
  }


  async getUsers(){
    const users = [];
    return 
  }

}
