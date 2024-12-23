import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator"

export class createDto {
    @IsString()
    @IsNotEmpty()
    urltype: string

    

    @IsString()
    @IsNotEmpty()
    url: string

    


}