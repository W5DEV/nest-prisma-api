import { Injectable } from '@nestjs/common';
import {ConfigService} from "@nestjs/config";

@Injectable()
export class AuthService {
    constructor(private config: ConfigService) {}

    envApiKey = this.config.get<string>('API_KEY');

    validateApiKey(apiKey: string) {
        const apiKeys: string[] = [this.envApiKey]
        return apiKeys.find((key) => apiKey === key);
    }
}
