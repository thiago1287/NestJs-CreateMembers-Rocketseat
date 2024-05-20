import { IsNotEmpty, Length } from 'class-validator';

export class CreateMemberBody{
  @IsNotEmpty({
    message: 'O nome é obrigatório',
  })
  @Length(5, 100)
  name: string;	
  @IsNotEmpty({
    message: 'A funcão é obrigatória',
  })
  function: string;
}