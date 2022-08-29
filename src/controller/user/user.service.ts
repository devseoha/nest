import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class UserService {
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new user';
  }
}
