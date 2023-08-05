import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { RecipesModule } from './recipes/recipes.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { InstructionsModule } from './instructions/instructions.module';
import { SystemRolesModule } from './system-roles/system-roles.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PrismaModule, UsersModule, RecipesModule, IngredientsModule, InstructionsModule, SystemRolesModule],
})
export class AppModule {}
