import { NextRequest, NextResponse } from 'next/server'

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 15 and TypeScript",
    slug: "getting-started-nextjs-15-typescript",
    excerpt: "Learn how to build modern web applications with Next.js 15, TypeScript, and the App Router. This comprehensive guide covers setup, routing, and best practices.",
    content: `
# Getting Started with Next.js 15 and TypeScript

Next.js 15 brings exciting new features and improvements that make building modern web applications easier than ever. In this guide, we'll explore how to get started with Next.js 15 and TypeScript.

## What's New in Next.js 15?

Next.js 15 introduces several key improvements:

- **Enhanced App Router**: More stable and feature-rich
- **Improved Performance**: Faster builds and better runtime performance
- **Better TypeScript Support**: Enhanced type checking and developer experience
- **Turbopack**: Faster development server (still in beta)

## Setting Up Your First Project

To create a new Next.js 15 project with TypeScript, run:

\`\`\`bash
npx create-next-app@latest my-app --typescript
\`\`\`

This will create a new project with TypeScript configuration already set up.

## Understanding the App Router

The App Router is a new paradigm in Next.js that uses file-based routing with React Server Components by default.

### Basic Route Structure

\`\`\`
app/
├── layout.tsx          # Root layout
├── page.tsx           # Home page
├── about/
│   └── page.tsx       # /about route
└── blog/
    ├── page.tsx       # /blog route
    └── [slug]/
        └── page.tsx   # /blog/[slug] dynamic route
\`\`\`

## Server Components vs Client Components

In Next.js 15, components are Server Components by default. This means they run on the server and have access to server-side resources.

### Server Component Example

\`\`\`typescript
// This is a Server Component (default)
export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  )
}
\`\`\`

### Client Component Example

\`\`\`typescript
'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}
\`\`\`

## Data Fetching Patterns

Next.js 15 provides several ways to fetch data:

### Static Generation

\`\`\`typescript
export async function generateStaticParams() {
  const posts = await getPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
\`\`\`

### Server-Side Rendering

\`\`\`typescript
export async function getServerSideProps(context) {
  const data = await fetchData(context.params.id)
  
  return {
    props: { data }
  }
}
\`\`\`

### Client-Side Fetching

\`\`\`typescript
'use client'

import { useEffect, useState } from 'react'

export default function DataComponent() {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData)
  }, [])
  
  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>
}
\`\`\`

## Best Practices

1. **Use Server Components by default**: Only use 'use client' when you need interactivity
2. **Optimize images**: Use the Next.js Image component for better performance
3. **Implement proper error handling**: Use error.tsx files for error boundaries
4. **Use loading states**: Implement loading.tsx files for better UX
5. **Leverage caching**: Use Next.js caching strategies for better performance

## Conclusion

Next.js 15 with TypeScript provides a powerful foundation for building modern web applications. By understanding the App Router, Server Components, and proper data fetching patterns, you can create fast, scalable, and maintainable applications.

Happy coding!
    `,
    publishedAt: "2024-01-15",
    readingTime: "8 min read",
    tags: ["Next.js", "TypeScript", "Web Development", "React"]
  },
  {
    id: 2,
    title: "Building RESTful APIs with Node.js and Express",
    slug: "building-restful-apis-nodejs-express",
    excerpt: "Learn how to design and implement RESTful APIs using Node.js and Express. This guide covers best practices, error handling, and security considerations.",
    content: `
# Building RESTful APIs with Node.js and Express

RESTful APIs are the backbone of modern web applications. In this guide, we'll explore how to build robust and scalable APIs using Node.js and Express.js.

## What is a RESTful API?

REST (Representational State Transfer) is an architectural style for designing networked applications. A RESTful API follows these principles:

- **Stateless**: Each request contains all the information needed to process it
- **Client-Server**: Clear separation between client and server concerns
- **Cacheable**: Responses should indicate if they can be cached
- **Uniform Interface**: Consistent and standardized API endpoints

## Setting Up Express

First, let's set up a new Express project:

\`\`\`bash
npm init -y
npm install express cors helmet morgan dotenv
npm install -D nodemon typescript @types/node @types/express
\`\`\`

## Basic Express Server

\`\`\`typescript
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(helmet()) // Security headers
app.use(cors()) // Enable CORS
app.use(morgan('combined')) // Logging
app.use(express.json()) // Parse JSON bodies
app.use(express.urlencoded({ extended: true }))

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API!' })
})

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`)
})
\`\`\`

## Designing RESTful Routes

Here's how to structure RESTful routes for a typical CRUD application:

\`\`\`typescript
// GET /api/users - Get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

// GET /api/users/:id - Get a specific user
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

// POST /api/users - Create a new user
app.post('/api/users', async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' })
  }
})

// PUT /api/users/:id - Update a user
app.put('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true }
    )
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.json(user)
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' })
  }
})

// DELETE /api/users/:id - Delete a user
app.delete('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
})
\`\`\`

## Error Handling Middleware

Create a centralized error handling middleware:

\`\`\`typescript
// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack)
  
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      error: 'Validation Error',
      details: err.message
    })
  }
  
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Invalid or missing authentication token'
    })
  }
  
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'production' ? 'Something went wrong' : err.message
  })
})

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: \`Route \${req.originalUrl} not found\`
  })
})
\`\`\`

## Input Validation

Use a validation library like Joi or Zod:

\`\`\`typescript
import Joi from 'joi'

const userSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
})

app.post('/api/users', (req, res) => {
  const { error } = userSchema.validate(req.body)
  
  if (error) {
    return res.status(400).json({
      error: 'Validation Error',
      details: error.details.map(detail => detail.message)
    })
  }
  
  // Proceed with user creation
})
\`\`\`

## Authentication & Authorization

Implement JWT-based authentication:

\`\`\`typescript
import jwt from 'jsonwebtoken'

const authenticateToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  
  if (!token) {
    return res.status(401).json({ error: 'Access token required' })
  }
  
  jwt.verify(token, process.env.JWT_SECRET!, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' })
    }
    req.user = user
    next()
  })
}

// Protected route
app.get('/api/profile', authenticateToken, (req, res) => {
  res.json({ user: req.user })
})
\`\`\`

## Best Practices

1. **Use proper HTTP status codes**: 200, 201, 400, 401, 403, 404, 500
2. **Implement rate limiting**: Prevent abuse and protect your API
3. **Use environment variables**: Never hardcode sensitive information
4. **Implement logging**: Monitor and debug your API effectively
5. **Use pagination**: For large datasets, implement pagination
6. **Version your API**: Use versioning to manage changes

## Conclusion

Building RESTful APIs with Node.js and Express requires attention to security, performance, and maintainability. By following these best practices and patterns, you can create robust APIs that serve as the foundation for modern web applications.

Remember to always validate inputs, handle errors gracefully, and implement proper authentication and authorization mechanisms.
    `,
    publishedAt: "2024-01-10",
    readingTime: "12 min read",
    tags: ["Node.js", "Express", "API", "Backend", "JavaScript"]
  }
]

export async function GET() {
  return NextResponse.json(blogPosts)
}