import { CacheModule } from "@nestjs/cache-manager";
import * as redisStore from 'cache-manager-redis-store';

export const redisConfig = CacheModule.register({
    store: redisStore,
    host: process.env.REDIS_HOST,
    port: process.env.REDIST_PORT,
    ttl: 60
})