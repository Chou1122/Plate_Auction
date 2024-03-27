import { createClient } from 'redis'
import config from "./env"

export const redis = createClient({
    socket: {
        host: config.RD_HOST,
        port: Number(config.RD_PORT)
    }
})

export async function startup() {
    await redis.connect()
}