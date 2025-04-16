FROM node:18-slim AS build

WORKDIR /app

COPY . .

RUN pnpm install

CMD ["pnpm", "start"]
