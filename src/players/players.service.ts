import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PlayersService {
  db: PrismaService;
  constructor(db: PrismaService) {
    this.db = db;
  }

  async create( CreatePlayerDto: CreatePlayerDto) {
    return await this.db.player.create({
      data: CreatePlayerDto
    });
  }

  findAll() {
    return this.db.player.findMany();
  }

  async findOne(id: number) {
    return this.db.player.findUnique({
      where: { id },
    });
  }

  async update(id: number, UpdatePlayerDto: UpdatePlayerDto) {
    const updatedPlayer = await this.db.player.update({
      where: { id },
      data: UpdatePlayerDto,
    });
    return updatedPlayer;
  }

  async remove(id: number) {
    try {
      await this.db.player.delete({
        where: { id },
      });
    }
    catch {
      return undefined;
    }
  }
}
