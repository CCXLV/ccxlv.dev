FROM oven/bun:1 AS base

WORKDIR /app

FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

RUN mkdir -p /temp/prod
COPY package.json bun.lock /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .
RUN mkdir -p public

ENV NODE_ENV=production
RUN bun run build

FROM base AS runner
COPY --from=prerelease /app/.next/standalone ./
COPY --from=prerelease /app/.next/static ./.next/static
COPY --from=prerelease /app/public ./public

ENV HOSTNAME=0.0.0.0
ENV PORT=3000

USER bun
EXPOSE 3000

CMD ["bun", "run", "server.js"]
