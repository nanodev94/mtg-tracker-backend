# mtg-tracker-backend

Tech stack:

- Eslint
- Prettier
- JavaScript
- TypeScript
- NodeJS
- Express
- TSOA + SWAGGER
- Prisma (PostgreSQL)
- Express modules
  - cors
  - helmet
  - jsonwebtoken
  - module-alias
  - morgan
  - chalk
  - log4js
- bcrypt
- zod

Generate SSL certificates:

- openssl genrsa -out localhost-key.pem 2048
- openssl req -new -x509 -sha256 -key localhost-key.pem -out localhost.pem -days 365
