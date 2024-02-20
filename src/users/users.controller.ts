import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { dataUserResponseExample } from './dto/show-user.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiOperation({ summary: 'Create new user.' })
  @ApiResponse({
    status: 201,
    description: 'Created.',
    schema: {
      example: dataUserResponseExample,
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request.',
    schema: {
      example: {
        message: ['email already registered'],
        error: 'Bad Request',
        statusCode: 400,
      },
    },
  })
  @Post('create')
  async create(@Body() user: CreateUserDto) {
    return this.userService.create({ ...user, username: user.email });
  }

  @ApiOperation({ summary: 'Data of current logged user.' })
  @ApiResponse({
    status: 200,
    description: 'OK.',
    schema: {
      example: dataUserResponseExample,
    },
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@Request() req) {
    return this.userService.show(req.user.userId);
  }
}
