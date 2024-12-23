import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { createDto } from './dto/create.dto';
import { editDto } from './dto/edit.dto';
import { payoutService } from './payout.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('payout')
@UseGuards(AuthGuard('jwt'))
export class payoutController {
    constructor(private payout:payoutService){}

    @Post('add')
    create(@Body()dto:createDto){
        return this.payout.createpayout(dto);
    }

    @Get('allpayout')
    findAll(){
        return this.payout.getpayout()
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.payout.getpayoutbyId(+id);
    }

    @Delete(':id')
    remove(@Param('id') id:string){
        return this.payout.deletepayout(+id)
    }

    @Patch(':id')
    update(@Param('id') id:string,@Body() dto:editDto){
        return this.payout.editpayout(+id,dto)
    }


}
