import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

@InputType()
export class RegisterDto{
    @Field()
    @IsNotEmpty({ message : "Name is required"})
    @IsString({ message : "Name must need to be one string."})
    name : string;

    @Field()
    @IsEmail({}, {message : "Email is required"})
    @IsNotEmpty({ message : "Email is required"})
    email : string;

    @Field()
    @IsNotEmpty({message : "Password is required"})
    @MinLength(8, {message : "Password must be at least 8 characters"})
    password: string;
}

@InputType()
export class LoginDto{
    @Field()
    @IsNotEmpty({message : "Email is required."})
    @IsEmail({}, {message : "Email must be valid."})
    email : string;

    @Field()
    @IsNotEmpty({message : "Password is required"})
    @MinLength(8, {message : "Password must be at least 8 characters"})
    password : string;
}
