import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { createDto, editDto } from './dto';
import { urlService } from './url.service';

@Controller('url')
export class urlController {

    constructor(private url:urlService){}
    
        @Post('add')
        create(@Body()dto:createDto){
            return this.url.createurl(dto);
        }
    
        @Get('allurl')
        findAll(){
            return this.url.geturl()
        }
    
        @Get(':id')
        findOne(@Param('id') id:string){
            return this.url.geturlbyId(+id);
        }
    
        @Delete(':id')
        remove(@Param('id') id:string,){
            return this.url.deleteurl(+id)
        }
    
       

}
