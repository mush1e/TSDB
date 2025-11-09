import type { StorageEngine } from "./engine";
import type { Schema } from "./schema";

class Table {
  constructor(
    public name: string,
    public schema: Schema,
    private storageEngine: StorageEngine,
    private nextId: number = 0,
  ) {}
}
