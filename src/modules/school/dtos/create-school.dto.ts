import  { IsString,IsNotEmpty,IsArray,IsOptional,IsNumberString } from 'class-validator'
import { Type } from 'class-transformer';


class CreateVagaDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    turma: string;
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    serie: string;
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    ano: string;
}

class CreateSchoolAdressDto{
    @IsString()
    @IsNotEmpty()
    country: string;
    @IsString()
    @IsNotEmpty()
    state: string;
    @IsString()
    @IsNotEmpty()
    city: string;
    @IsString()
    @IsNotEmpty()
    neighborhood: string;
    @IsString()
    @IsNotEmpty()
    street: string;
    @IsString()
    @IsNotEmpty()
    streetNumber: string;
    @IsNumberString()
    @IsNotEmpty()
    zipCode: string;

}
export class CreateSchoolDto{

    @IsString()
    @IsNotEmpty()
    name :string;
    @IsString()
    @IsNotEmpty()
    cnpj: string;
    @Type(() => CreateSchoolAdressDto)
    endereco: CreateSchoolAdressDto;

    @IsArray()
    @IsOptional()
    @Type(()=> CreateVagaDto)
    vagas: CreateVagaDto[]
}



