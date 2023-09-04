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

### tRPC Server

#### Router:

A router defines a query, mutation, or subscription (i.e. sockets) path and
code which is called when that path is activated.

It's the same as a controller in nestjs, except cooler.

An app can have many routers, such as `userRouter`, `courseRouter`, `marketplaceRouter`, etc.

#### Procedures:

A procedure is how a router defines a path. It includes the context of the request
which the router receives.

Different procedures can have different contexts.

Procedures can implement middleware.

You can have any amount of procedures in your app, where one could be public,
and another could be private be implementing authentication middleware.

Most commonly, a `publicProcedure` and a `privateProcedure`, which includes
the user's session, are defined.

#### Validation:

When defining entries in a router, input could be requested from the user, in
which case it must be validated. This is done using `zod` and is fully type-safe
on both the client and the server.

Yes, that means one **_inferred_** model to rule them all.

#### Context:

Context is the replacement for dependency injection. A context for an entry in
the router can include the database connection, the user session, etc..

It's fully typed, of course.

Different procedures can have different contexts. A public procedure may include
only the db connection, but a protected procedure would also include the user
session.

### tRPC Client

#### Calling a query:

a query is called by importing the app router and calling the query following
the path it was defined under. This uses `useQuery` from `tanstack` under the hood.

#### Mutations:

mutations are called exactly like queries. This uses `useMutation` from `tanstack`
under the hood.

#### Server Side Rendering

For SSR or SSG, tRPC helpers can be used. This allows a fetch or prefetch to
be executed in the `getServerSideProps` or `getStaticProps` functions.
