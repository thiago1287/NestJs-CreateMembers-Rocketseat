import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from 'database/prisma.service';
import { MembersRepository } from './repositories/members-repository';
import { prismaMembersRepository } from './repositories/Prisma/prismaMembers-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: MembersRepository, 
      useClass: prismaMembersRepository
  }
  ],
})
export class AppModule {}
