## Express Typescript Template

A bootstrap project that use typescript, express and typeorm.

### Developent

Migrations

```
// create migration script
yarn migrate:create [name]

// generate migration script base from entity class
yarn migrate:generate [name]

// execute migration scripts
yarn migrate:run

// rollback previous migration script
yarn migrate:revert
```

Unit-test

```
yarn test
```

Start development server

```
yarn start:dev
```

### Production

First, build profject before start server.

```
yarn build
yarn start:prod
```
