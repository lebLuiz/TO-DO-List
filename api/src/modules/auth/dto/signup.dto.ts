import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignupDto {
  @IsString({ message: 'O nome precisa ser uma string' })
  @IsNotEmpty({ message: 'O nome não pode estar vazio' })
  name: string;

  @IsString({ message: 'O email precisa ser uma string' })
  @IsNotEmpty({ message: 'O email não pode estar vazio' })
  @IsEmail(undefined, { message: 'O email precisa ser válido' })
  email: string;

  @IsString({ message: 'A senha precisa ser uma string' })
  @IsNotEmpty({ message: 'A senha não pode estar vazia' })
  @MinLength(8, { message: 'A senha precisa ter no mínimo 8 caracteres' })
  password: string;
}
