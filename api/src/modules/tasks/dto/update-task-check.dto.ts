import { IsBoolean, IsNotEmpty } from 'class-validator';

export class UpdateTaskCheckDto {
  @IsBoolean({ message: 'A verificação precisa ser um booleano' })
  @IsNotEmpty({ message: 'A verificação não pode estar vazia' })
  checked: boolean;
}
