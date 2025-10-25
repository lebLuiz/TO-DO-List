import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsString({ message: 'O título precisa ser uma string' })
  @IsNotEmpty({ message: 'O título não pode estar vázio' })
  @MinLength(3, { message: 'O título precisa ter no mínimo 3 caracteres' })
  title: string;

  @IsString({ message: 'A descrição precisa ser uma string' })
  description: string | null;
}
