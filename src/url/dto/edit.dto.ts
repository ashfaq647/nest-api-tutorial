import { IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword } from "class-validator"

export class editDto{
        @IsString()
        @IsOptional()
        urltype: string
    
        
    
        @IsString()
        @IsOptional()
        url: string
    
        
}