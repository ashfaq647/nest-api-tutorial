import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator"

export class createDto {
    @IsString()
    @IsNotEmpty()
    amount : string

    @IsString()
    @IsNotEmpty()
    method: string

    @IsString()
    @IsNotEmpty()
    status: string

    


}