import { serve } from "http/server.ts"

const s = serve({
  port: 8000
})

console.log('preparing listen on port 8000')

for await (const req of s) {
  req.respond({ body: 'hello deno' })
}
