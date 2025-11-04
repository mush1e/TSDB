import { Row } from '../types/core';
import { StorageEngine, LogEntry } from './storageEngine';

/*
   In-memory storage implementation using Maps and Arrays.
 */
export class InMemoryStorage implements StorageEngine {
  // Storage: tableName -> array of rows
  private tables: Map<string, Row[]> = new Map();
  
  // Operation log for audit recovery
  private log: LogEntry[] = [];

  /*
     Load all rows from a table
   */
  loadTable(name: string): Row[] {
    const table = this.tables.get(name);
    if (!table) {
      throw new Error(`Table '${name}' does not exist`);
    }
    return [...table]; 
  }

  /*
     Write/overwrite all rows in a table
   */
  writeTable(name: string, rows: Row[]): void {
    this.tables.set(name, [...rows]); 
  }

  /*
     Append an operation to the log
   */
  appendLog(entry: LogEntry): void {
    this.log.push(entry);
  }

  /*
     Replay the entire operation log
    Used for crash recovery and auditing
   */
  replayLog(): LogEntry[] {
    return [...this.log];
  }

  /*
     List all table names
   */
  listTables(): string[] {
    return Array.from(this.tables.keys());
  }

  /*
    Create an empty table
   */
  createEmptyTable(name: string): void {
    if (this.tables.has(name)) {
      throw new Error(`Table '${name}' already exists`);
    }
    this.tables.set(name, []);
  }
}