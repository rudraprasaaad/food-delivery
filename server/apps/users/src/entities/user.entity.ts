import { Directive, Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Directive('@key(fields:"id")')
export class Avatars{
    @Field()
    id : string;
    
    @Field()
    public_id: string;  

    @Field()
    url : string;

    @Field()
    useId : string;
}

@ObjectType()
export class User{
    @Field()
    id: string; 

    @Field()
    name : string;

    @Field()
    email : string;

    @Field()
    password : string;

    @Field(() => Avatars, {nullable: true})
    avatar? : Avatars | null;
}