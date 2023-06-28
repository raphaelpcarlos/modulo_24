import 'dotenv/config'
import { Pact } from "@pact-foundation/pact"
import { resolve } from 'path'

const mockProvider = new Pact({
    consumer: 'ebac-demo-store-admin',
    provider: 'ebac-demo-store-server',
    port: process.env.MOCK_PORT,
    log: resolve(process.cwb(), 'logs', 'pact.log'),
    dir: resolve(process.cwb(), 'pacs')
})

describe('Consumer Test', () => {

    beforeAll(() => {
        
    })
    it('Should return user list', () => {

    });
});