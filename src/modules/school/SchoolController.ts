import { Body, Controller, Get, Post,InternalServerErrorException } from "@nestjs/common";
import { SchoolRepository } from "./repositories/schools.repository";
import { CreateSchoolDto } from "./dtos/create-school.dto";
import { SchoolEntity } from "src/shared/entities/school.entity";



@Controller('schools')
export class SchoolController {

    constructor(private readonly schoolRepository: SchoolRepository){}
 @Get('/')
 async index(){
    return {
        test: "teste"
    }
 }

 @Post('/')
 async store(@Body() dto: CreateSchoolDto): Promise<SchoolEntity>{
    try{
        console.log(dto)
        console.log(dto.endereco)
        return await this.schoolRepository.createAsync(dto);
    }catch(err){
        throw new InternalServerErrorException();
    }
 }
}