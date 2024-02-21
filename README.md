# Sora.FM

Sora AI Video Generator

## Live Demo

[https://sora.fm](https://sora.fm)

![preview](./preview.png)

## Quick Start

1. clone project

```shell
git clone https://github.com/all-in-aigc/sorafm
```

2. install dependencies

```shell
cd sorafm
pnpm install
```

3. init database

create your database use [local postgres](https://wiki.postgresql.org/wiki/Homebrew) or [vercel-postgres](https://vercel.com/docs/storage/vercel-postgres) or [supabase](https://supabase.com/)

create tables from sql at `data/install.sql`

4. set environmental values

put `.env.local` under root dir with values list below

```
POSTGRES_URL="postgres://USER:PASSWORD@HOST/DB"

WEB_BASE_URI="http://localhost:3000"
```

5. local development

```shell
pnpm dev --port 3000
```

open `http://localhost:3000` for preview

## Credit to

- [aiwallpaper](https://aiwallpaper.shop) for code reference
- [nextjs](https://nextjs.org/docs) for full-stack development
- [node-postgres](https://node-postgres.com/) for data processing
- [tailwindcss](https://tailwindcss.com/) for page building

## Other Things

you can contact me at Twitter: https://twitter.com/idoubicc

if this project is helpful to you, buy be a coffee.

<a href="https://www.buymeacoffee.com/idoubi" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
