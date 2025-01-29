const snippets = [
  {
    "_id": "676148c63900d6ec36daab34",
    "title": "Auth middleware 00",
    "description": "Implementar un middleware que compruebe la autenticación",
    "content": "import jwt from 'jsonwebtoken';\nimport keys from '../constants.config.js';\nimport userService from '../users/user.service.js';\n\nconst unauthorized = (res) => {\n  res.status(401).json({ message: 'Unauthorized' });\n};\n\nfunction middleware(req, res, next) {\n  if (req.url.startsWith('/api')) {\n    const publicPaths = ['/api', '/api/auth/login', '/api/auth/register'];\n\n    const isPublic = publicPaths.some((route) => req.path === route);\n\n    if (isPublic) {\n      return next();\n    }\n\n    const authHeader = req.headers.authorization;\n\n    if (!authHeader) {\n      return unauthorized(res);\n    }\n\n    const token = authHeader.split(' ')[1];\n\n    if (!token) {\n      return unauthorized(res);\n    }\n\n    jwt.verify(token, keys.JWT_PRIVATE_KEY, async (error, payload) => {\n      if (error) {\n        return unauthorized(res);\n      }\n      const user = await userService.getByEmail(payload.email);\n      req.user = user;\n      return next();\n    });\n  } else {\n    return next();\n  }\n}\n\nexport default middleware;\n",
    "category": "nodejs",
    "author": "Pepe",
    "__v": 0
  },
  {
    "_id": "676155e8bf2f4a75cb06f4d8",
    "title": "Ejemplo model de una tabla mongoDB",
    "description": "Ejemplo sintático del model para una tabla mongo, para que tengamos una referencia de los campos requeridos, tipo de datos, etc...",
    "content": "import { model, Schema } from 'mongoose';\n\nconst snippetsSchema = new Schema({\n  title: {\n    type: String,\n    required: true,\n  },\n  description: {\n    type: String,\n    required: false,\n  },\n  content: {\n    type: String,\n    required: true,\n  },\n  category: {\n    type: String,\n    required: true,\n  },\n  author: {\n    type: String,\n    required: true,\n  },\n});\n\nconst snippetsModel = model('Snippets', snippetsSchema);\n\nexport default snippetsModel;",
    "category": "nodejs",
    "author": "Miguel",
    "__v": 0
  },
  {
    "_id": "677ec03c093e106584c1d716",
    "title": "Auth middleware 1",
    "description": "Implementar un middleware que compruebe la autenticación",
    "content": "import jwt from 'jsonwebtoken';\nimport keys from '../constants.config.js';\nimport userService from '../users/user.service.js';\n\nconst unauthorized = (res) => {\n  res.status(401).json({ message: 'Unauthorized' });\n};\n\nfunction middleware(req, res, next) {\n  if (req.url.startsWith('/api')) {\n    const publicPaths = ['/api', '/api/auth/login', '/api/auth/register'];\n\n    const isPublic = publicPaths.some((route) => req.path === route);\n\n    if (isPublic) {\n      return next();\n    }\n\n    const authHeader = req.headers.authorization;\n\n    if (!authHeader) {\n      return unauthorized(res);\n    }\n\n    const token = authHeader.split(' ')[1];\n\n    if (!token) {\n      return unauthorized(res);\n    }\n\n    jwt.verify(token, keys.JWT_PRIVATE_KEY, async (error, payload) => {\n      if (error) {\n        return unauthorized(res);\n      }\n      const user = await userService.getByEmail(payload.email);\n      req.user = user;\n      return next();\n    });\n  } else {\n    return next();\n  }\n}\n\nexport default middleware;\n",
    "category": "nodejs",
    "author": "Pepe",
    "__v": 0
  },
  {
    "_id": "677ec03c093e106584c1d717",
    "title": "Auth middleware 3",
    "description": "Implementar un middleware que compruebe la autenticación",
    "content": "import jwt from 'jsonwebtoken';\nimport keys from '../constants.config.js';\nimport userService from '../users/user.service.js';\n\nconst unauthorized = (res) => {\n  res.status(401).json({ message: 'Unauthorized' });\n};\n\nfunction middleware(req, res, next) {\n  if (req.url.startsWith('/api')) {\n    const publicPaths = ['/api', '/api/auth/login', '/api/auth/register'];\n\n    const isPublic = publicPaths.some((route) => req.path === route);\n\n    if (isPublic) {\n      return next();\n    }\n\n    const authHeader = req.headers.authorization;\n\n    if (!authHeader) {\n      return unauthorized(res);\n    }\n\n    const token = authHeader.split(' ')[1];\n\n    if (!token) {\n      return unauthorized(res);\n    }\n\n    jwt.verify(token, keys.JWT_PRIVATE_KEY, async (error, payload) => {\n      if (error) {\n        return unauthorized(res);\n      }\n      const user = await userService.getByEmail(payload.email);\n      req.user = user;\n      return next();\n    });\n  } else {\n    return next();\n  }\n}\n\nexport default middleware;\n",
    "category": "nodejs",
    "author": "Pepe",
    "__v": 0
  },
  {
    "_id": "677ec03c093e106584c1d718",
    "title": "Auth middleware 4",
    "description": "Implementar un middleware que compruebe la autenticación",
    "content": "import jwt from 'jsonwebtoken';\nimport keys from '../constants.config.js';\nimport userService from '../users/user.service.js';\n\nconst unauthorized = (res) => {\n  res.status(401).json({ message: 'Unauthorized' });\n};\n\nfunction middleware(req, res, next) {\n  if (req.url.startsWith('/api')) {\n    const publicPaths = ['/api', '/api/auth/login', '/api/auth/register'];\n\n    const isPublic = publicPaths.some((route) => req.path === route);\n\n    if (isPublic) {\n      return next();\n    }\n\n    const authHeader = req.headers.authorization;\n\n    if (!authHeader) {\n      return unauthorized(res);\n    }\n\n    const token = authHeader.split(' ')[1];\n\n    if (!token) {\n      return unauthorized(res);\n    }\n\n    jwt.verify(token, keys.JWT_PRIVATE_KEY, async (error, payload) => {\n      if (error) {\n        return unauthorized(res);\n      }\n      const user = await userService.getByEmail(payload.email);\n      req.user = user;\n      return next();\n    });\n  } else {\n    return next();\n  }\n}\n\nexport default middleware;\n",
    "category": "nodejs",
    "author": "Pepe",
    "__v": 0
  },
  {
    "_id": "677ec03c093e106584c1d719",
    "title": "Auth middleware 5",
    "description": "Implementar un middleware que compruebe la autenticación",
    "content": "import jwt from 'jsonwebtoken';\nimport keys from '../constants.config.js';\nimport userService from '../users/user.service.js';\n\nconst unauthorized = (res) => {\n  res.status(401).json({ message: 'Unauthorized' });\n};\n\nfunction middleware(req, res, next) {\n  if (req.url.startsWith('/api')) {\n    const publicPaths = ['/api', '/api/auth/login', '/api/auth/register'];\n\n    const isPublic = publicPaths.some((route) => req.path === route);\n\n    if (isPublic) {\n      return next();\n    }\n\n    const authHeader = req.headers.authorization;\n\n    if (!authHeader) {\n      return unauthorized(res);\n    }\n\n    const token = authHeader.split(' ')[1];\n\n    if (!token) {\n      return unauthorized(res);\n    }\n\n    jwt.verify(token, keys.JWT_PRIVATE_KEY, async (error, payload) => {\n      if (error) {\n        return unauthorized(res);\n      }\n      const user = await userService.getByEmail(payload.email);\n      req.user = user;\n      return next();\n    });\n  } else {\n    return next();\n  }\n}\n\nexport default middleware;\n",
    "category": "nodejs",
    "author": "Pepe",
    "__v": 0
  },
  {
    "_id": "677ec03c093e106584c1d71d",
    "title": "Auth middleware 9",
    "description": "Implementar un middleware que compruebe la autenticación",
    "content": "import jwt from 'jsonwebtoken';\nimport keys from '../constants.config.js';\nimport userService from '../users/user.service.js';\n\nconst unauthorized = (res) => {\n  res.status(401).json({ message: 'Unauthorized' });\n};\n\nfunction middleware(req, res, next) {\n  if (req.url.startsWith('/api')) {\n    const publicPaths = ['/api', '/api/auth/login', '/api/auth/register'];\n\n    const isPublic = publicPaths.some((route) => req.path === route);\n\n    if (isPublic) {\n      return next();\n    }\n\n    const authHeader = req.headers.authorization;\n\n    if (!authHeader) {\n      return unauthorized(res);\n    }\n\n    const token = authHeader.split(' ')[1];\n\n    if (!token) {\n      return unauthorized(res);\n    }\n\n    jwt.verify(token, keys.JWT_PRIVATE_KEY, async (error, payload) => {\n      if (error) {\n        return unauthorized(res);\n      }\n      const user = await userService.getByEmail(payload.email);\n      req.user = user;\n      return next();\n    });\n  } else {\n    return next();\n  }\n}\n\nexport default middleware;\n",
    "category": "nodejs",
    "author": "Pepe",
    "__v": 0
  },
  {
    "_id": "677ec03c093e106584c1d71e",
    "title": "Auth middleware 10",
    "description": "Implementar un middleware que compruebe la autenticación",
    "content": "import jwt from 'jsonwebtoken';\nimport keys from '../constants.config.js';\nimport userService from '../users/user.service.js';\n\nconst unauthorized = (res) => {\n  res.status(401).json({ message: 'Unauthorized' });\n};\n\nfunction middleware(req, res, next) {\n  if (req.url.startsWith('/api')) {\n    const publicPaths = ['/api', '/api/auth/login', '/api/auth/register'];\n\n    const isPublic = publicPaths.some((route) => req.path === route);\n\n    if (isPublic) {\n      return next();\n    }\n\n    const authHeader = req.headers.authorization;\n\n    if (!authHeader) {\n      return unauthorized(res);\n    }\n\n    const token = authHeader.split(' ')[1];\n\n    if (!token) {\n      return unauthorized(res);\n    }\n\n    jwt.verify(token, keys.JWT_PRIVATE_KEY, async (error, payload) => {\n      if (error) {\n        return unauthorized(res);\n      }\n      const user = await userService.getByEmail(payload.email);\n      req.user = user;\n      return next();\n    });\n  } else {\n    return next();\n  }\n}\n\nexport default middleware;\n",
    "category": "nodejs",
    "author": "Pepe",
    "__v": 0
  },
  {
    "_id": "677ec03c093e106584c1d71c",
    "title": "Auth middleware 8",
    "description": "Implementar un middleware que compruebe la autenticación",
    "content": "import jwt from 'jsonwebtoken';\nimport keys from '../constants.config.js';\nimport userService from '../users/user.service.js';\n\nconst unauthorized = (res) => {\n  res.status(401).json({ message: 'Unauthorized' });\n};\n\nfunction middleware(req, res, next) {\n  if (req.url.startsWith('/api')) {\n    const publicPaths = ['/api', '/api/auth/login', '/api/auth/register'];\n\n    const isPublic = publicPaths.some((route) => req.path === route);\n\n    if (isPublic) {\n      return next();\n    }\n\n    const authHeader = req.headers.authorization;\n\n    if (!authHeader) {\n      return unauthorized(res);\n    }\n\n    const token = authHeader.split(' ')[1];\n\n    if (!token) {\n      return unauthorized(res);\n    }\n\n    jwt.verify(token, keys.JWT_PRIVATE_KEY, async (error, payload) => {\n      if (error) {\n        return unauthorized(res);\n      }\n      const user = await userService.getByEmail(payload.email);\n      req.user = user;\n      return next();\n    });\n  } else {\n    return next();\n  }\n}\n\nexport default middleware;\n",
    "category": "nodejs",
    "author": "Pepe",
    "__v": 0
  },
  {
    "_id": "677ec03c093e106584c1d71a",
    "title": "Auth middleware 6",
    "description": "Implementar un middleware que compruebe la autenticación",
    "content": "import jwt from 'jsonwebtoken';\nimport keys from '../constants.config.js';\nimport userService from '../users/user.service.js';\n\nconst unauthorized = (res) => {\n  res.status(401).json({ message: 'Unauthorized' });\n};\n\nfunction middleware(req, res, next) {\n  if (req.url.startsWith('/api')) {\n    const publicPaths = ['/api', '/api/auth/login', '/api/auth/register'];\n\n    const isPublic = publicPaths.some((route) => req.path === route);\n\n    if (isPublic) {\n      return next();\n    }\n\n    const authHeader = req.headers.authorization;\n\n    if (!authHeader) {\n      return unauthorized(res);\n    }\n\n    const token = authHeader.split(' ')[1];\n\n    if (!token) {\n      return unauthorized(res);\n    }\n\n    jwt.verify(token, keys.JWT_PRIVATE_KEY, async (error, payload) => {\n      if (error) {\n        return unauthorized(res);\n      }\n      const user = await userService.getByEmail(payload.email);\n      req.user = user;\n      return next();\n    });\n  } else {\n    return next();\n  }\n}\n\nexport default middleware;\n",
    "category": "nodejs",
    "author": "Pepe",
    "__v": 0
  }
]

export default snippets;