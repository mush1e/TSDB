import type { StorageEngine } from "./engine";
import { Row, Schema } from "./schema";

class Table {
  constructor(
    public name: string,
    public schema: Schema,
    private storageEngine: StorageEngine,
    private nextId: number = 0,
  ) {}

  async insert(row: Row<Schema>): Promise<void> {
    const primaryKey = this.schema.getPrimaryKey();
    let pkValue = row[primaryKey.name];
    if (pkValue === undefined) {
      pkValue = this.nextId++;
      row[primaryKey.name] = pkValue;
    }
    await this.storageEngine.set(this.name, String(pkValue), row);
  }

  async get(
    id: number | string | boolean | Date,
  ): Promise<Row<Schema> | undefined> {
    return await this.storageEngine.get(this.name, String(id));
  }
}
