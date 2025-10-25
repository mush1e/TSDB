# TSDB

> Relational Database in Vanilla TypeScript

A fully-featured (ish) relational database system written from scratch in pure TypeScript.
It has tables, schemas, a query engine, and even a storage engine — because apparently, I hate free time.

## Overview

This project is a hand-built relational database implemented entirely in TypeScript.
It supports table creation, inserts, selections, joins, and persistent storage through a custom pluggable storage engine.

It runs entirely in memory by default, but can also persist data to disk using an append-only log and table snapshots, because if you’re going to do something absurd, you might as well do it correctly.

This is not a production database. It’s a proof of concept, an educational experiment, and a mild cry for help.

## Features

Tables: Create, drop, and inspect tables

Schemas: Enforced column types (via TypeScript and runtime checks)

Queries: Insert, select, filter, and join

Storage Engine: Pluggable persistence with a real write-ahead log (WAL)

In-Memory Mode: For those who live dangerously

File-Based Mode: For those who like pretending this is SQLite

Type Safety: Because we’re in TypeScript, and we must suffer

## Storage Engine

The database uses a pluggable storage engine with an interface inspired by real databases (and poor decisions):

```ts
interface StorageEngine {
  loadTable(name: string): any[];
  writeTable(name: string, rows: any[]): void;
  appendLog(entry: LogEntry): void;
  replayLog(): LogEntry[];
  listTables(): string[];
}
```

### Included Engines
- `InMemoryStorageEngine`
> The default engine. Everything exists in memory until the process exits, at which point your data ascends to the great /dev/null in the sky.

- `FileStorageEngine`
> A file-backed engine that persists tables to disk using two components:
> - Append-only write-ahead log for durability
> - Periodic snapshots for faster recovery

On startup, it replays the log to restore the last consistent state, then immediately regrets how long that took.

Architecture
```
src/
  db/
    database.ts       // Core engine and table registry
    table.ts           // Table class with schema enforcement
    queryEngine.ts     // Filtering, projection, joins
  storage/
    storageEngine.ts   // Abstract interface
    inMemoryStorage.ts // Ephemeral backend
    fileStorage.ts     // Persistent WAL + snapshot backend
  utils/
    serializer.ts      // Encoding helpers
    logger.ts          // Debug logging
  index.ts
```

## Roadmap

- Proper SQL parser instead of eval("row.age > 26")

- Query planner and optimizer (that does nothing but pretend)

- Indexes (so lookups take less than O(n))

- Transactions and rollback

- Caching layer

- Replication, because why not

- Dark mode (Every good project has dark mode support)

## FAQ

Q: Why TypeScript?
A: Because I am devoid of all joy in my life.

Q: Is it fast?
A: No. But it is deterministically slow, which is kind of like consistency.

Q: Does it support SQL?
A: Barely. Enough to trick you into thinking it does.

Q: Should I use this in production?
A: Only if you hate uptime.

## License

MIT License
Do whatever you want with it, but maybe don’t run your startup on it.
