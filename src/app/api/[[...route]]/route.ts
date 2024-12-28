import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { users } from './users'

// export const runtime = 'edge'

const app = new Hono().basePath('/api')

app.route('/user', users)

export const GET = handle(app)
export const POST = handle(app)