import { Mutation, Resolver, Args, Context } from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { RegisterResponse } from "./types/user.type";
import { RegisterDto } from "./dto/user.dto";
import { BadRequestException, Query } from "@nestjs/common";

@Resolver("User")
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Mutation(() => RegisterResponse)
  async register(
    @Args("registerInput") registerDto: RegisterDto,
    @Context() context: {res : Response}, 
  ): Promise<RegisterResponse> {
    if (!registerDto.name || !registerDto.email || !registerDto.password) {
      throw new BadRequestException("Please fill the all field");
    }

    const user = await this.userService.register(registerDto, context.res);

    return { user };
  }
}
