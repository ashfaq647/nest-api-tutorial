import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createDto } from './dto/create.dto';
import { editDto } from './dto/edit.dto';

@Injectable()
export class payoutService {
    constructor(private  prisma:PrismaService){}

    async createpayout(dto:createDto){
        const payout =await this.prisma.payout.create({
            data : {
                    
                   
                    amount: dto.amount,
                
                    method: dto.method,
                   
                    status: dto.status
            }
        })
        return 'Insertion success';
    }


    async getpayout(){
        return this.prisma.payout.findMany();
    }


    async getpayoutbyId(id:number){
        return this.prisma.payout.findUnique({
            where : {
                id
            }
        })
    }


    async editpayout (userId : number ,dto:editDto){
        const payout=await this.prisma.payout.update({
            where : {
                id : userId,
            },
            data : {
                    
                        
                        amount: dto.amount,
                    
                        method: dto.method,
                        
                        status: dto.status
            }
        })

        return 'data update success';
    }


    async deletepayout(id:number){
        return this.prisma.payout.delete({
            where : {
                id,
            }
        })
    }


}
