# T3 (kinda) PoC

## Prisma

### Commands:

- Push current schema to database (not very useful for in-production apps,
but useful for your first time creating the db schema)

```bash
npx prisma db push
```

- Get current database schema and store it in local `schema.prisma` file

```bash
npx prisma db pull
```

- Generate types according to `prisma.schema`. Run this after `db pull`

```bash
npx prisma generate
```

### Connecting

Set `DATABASE_URL` variable in your `.env` file with your connection URL

### Migrations

After setting up your initial db schema, create your first migration and set it
to be already applied:

```bash
```

This will give you a starting point of how your db schema looks.

Any future migrations can be done in the following manner:

```bash
```

---

## tRPC
