import { Module } from '@nestjs/common';
import {PassportModule} from "@nestjs/passport";
import {AuthService} from "./auth.service";
import {ApiKeyStrategy} from "./strategy/apikey.strategy";
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [PassportModule, ConfigModule],
    providers: [AuthService, ApiKeyStrategy],
    exports: [AuthService],
})
export class AuthModule {}
