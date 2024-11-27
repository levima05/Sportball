import { IsInt, IsNotEmpty, IsString } from "class-validator";


export class CreatePlayerDto {
  @IsNotEmpty()
  @IsString()
  name : string 
  @IsNotEmpty()
  @IsInt()
  goalCount : number 
  @IsNotEmpty()
  @IsString()
  birthDate : string
}
