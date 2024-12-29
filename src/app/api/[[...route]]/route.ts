import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { users } from './users'
import { post } from './post'
import { userPost } from './userPost'
import { advertisement } from './advertisement'

// export const runtime = 'edge'

const app = new Hono().basePath('/api')

app.route('/user', users).route('/post', post).route("/userPost", userPost).route("/advertise", advertisement)

export const GET = handle(app)
export const POST = handle(app)