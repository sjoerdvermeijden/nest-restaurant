# NestJS + Drizzle setup

## Om het project draaiende te krijgen

- Maak een `.env` bestand aan met de database gegevens

```env
DATABASE_URL=postgres://postgres:local@localhost:5432/postgres
```

Draai de volgende commands:

\- docker compose up
\- npm run start

## Een resource toevoegen en de data ervan fetchen

### 1. Voeg imports toe aan de resource

```ts
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../drizzle/schema';
import { DrizzleAsyncProvider } from '../drizzle/drizzle.provider';
```

### 2. Voeg de volgende constructor toe aan de class

```ts
constructor(
  @Inject(DrizzleAsyncProvider)
  private db: NodePgDatabase<typeof schema>,
) {}
```

### 3. Fetch data van de resource

```ts
async findAll() {
  const allCars = await this.db.select().from(schema.cars);
  return allCars;
}
```

### 4. Voeg de Drizzle module toe aan de resource module

> _Nog aan te vullen: voorbeeld van de module-configuratie._
