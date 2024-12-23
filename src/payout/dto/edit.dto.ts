import { IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword } from "class-validator"

export class editDto{
        @IsString()
        @IsOptional()
        amount : string
    
        @IsString()
        @IsOptional()
        method: string
    
        @IsString()
        @IsOptional()
        status: string

}