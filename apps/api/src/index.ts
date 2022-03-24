import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const server = fastify()

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

interface PostBody {
  title: string
  content: string
  author: string
}

server.post<{ Body: PostBody; Reply: PostBody }>('/post', async (req, res) => {
  const { title, content, author } = req.body

  const post = await prisma.post.create({
    data: {
      title,
      content,
      author,
    },
  })

  res.status(200).send(post)
})

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
