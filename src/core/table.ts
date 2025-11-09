import { StorageEngine } from "./engine";
import { Row, Schema } from "./schema";

class Table {
  constructor(
    public name: string,
    public schema: Schema,
    private storageEngine: StorageEngine,
    private nextId: number = 0,
  ) {}
}
