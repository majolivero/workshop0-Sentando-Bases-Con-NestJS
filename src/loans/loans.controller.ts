/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param } from '@nestjs/common'; //Permite usar los decoradores
import { LoansService } from './loans.service';

@Controller('loans')
export class LoansController {

  //Para que el servicio este LoansService sea utilizado correctamente en el controlador, debe ser inyectado a traves del constructor del controlador. 
  constructor(private readonly loansService:LoansService){}

  @Post()
  createLoan(@Body() createLoanDto: any) {
    return `Loan created for ${createLoanDto.userId}`;
  }

  @Get(':id')
  getLoanStatus(@Param('id') id: string) {
    return `Status of loan ${id}`;
  }
}


