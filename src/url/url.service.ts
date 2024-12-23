import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createDto, editDto } from './dto';

@Injectable()
export class urlService {
    constructor(private  prisma:PrismaService){}
    
        async createurl(dto:createDto){
            const url =await this.prisma.url.create({
                data : {
                        
                        urltype: dto.urltype,
                    
                      
                        url: dto.url,
                    
                        
                        
                }
            })
            return 'Insertion success';
        }
    
    
        async geturl(){
            return this.prisma.url.findMany();
        }
    
    
        async geturlbyId(id:number){
            return this.prisma.url.findUnique({
                where : {
                    id
                }
            })
        }
    
    
       
    
    
        async deleteurl(id:number){
            return this.prisma.url.delete({
                where : {
                    id,
                }
            })
        }
    
}
