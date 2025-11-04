// core/database.ts
import { Schema } from '../types/schema';
import { StorageEngine } from '../storage/storageEngine';
import { Table } from './table';

/*
   Database: Main orchestrator for managing tables and storage.
  
   Responsibilities:
   - Create and manage tables
   - Coordinate with storage engine
   - Log operations for crash recovery
 */
export class Database {
  // Map: tableName -> Table object
  private tables: Map<string, Table> = new Map();

  /*
    Storage engine implementation (injected)
   */
  constructor(private storage: StorageEngine) {}

  /*
    Create a new table
   */
  createTable(name: string, schema: Schema): Table {
    // Create table object. I have not implemented yet, it is for showing purposes
    const table = new Table(name, schema);
    return table;
  }

  /*
     Get an existing table
   */
  getTable(name: string): Table {
    const table = this.tables.get(name);
    if (!table) {
      throw new Error(`Table '${name}' does not exist`);
    }
    return table;
  }

  /*
     List all table names
   */
  listTables(): string[] {
    return Array.from(this.tables.keys());
  }

  /*
     save all tables to storage
     Persists all in-memory data to the storage engine
   */
  saveAll(): void {}

  /*
     Display database status (for debugging/monitoring)
   */
  status(): void {}
}