import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { RecipesModule } from './recipes/recipes.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { InstructionsModule } from './instructions/instructions.module';
import { SystemRolesModule } from './system-roles/system-roles.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { AuthzModule } from './authz/authz.module';

@Module({
  controllers: [AppController],
  providers: [AppService, AuthService],
  imports: [PrismaModule, UsersModule, RecipesModule, IngredientsModule, InstructionsModule, SystemRolesModule, ConfigModule.forRoot({
    isGlobal: true,
  }), AuthModule, AuthzModule],
})
export class AppModule {}
