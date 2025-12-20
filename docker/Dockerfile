FROM oven/bun:1.3 AS base
LABEL org.opencontainers.image.source=https://github.com/ccxlv/ccxlv.dev

WORKDIR /src

COPY package.json bun.lock ./

RUN bun install

COPY ./ ./

RUN bun run build

FROM oven/bun:1.1 AS runner

WORKDIR /src

COPY --from=base /src/.next/standalone ./
COPY --from=base /src/.next/static ./.next/static
COPY --from=base /src/public ./public

ENV NODE_ENV=production
EXPOSE 3000

CMD ["bun", "run", "server.js"]
