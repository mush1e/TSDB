import { Row } from '../types/core';

/*
   What I got it so far  We use it for recovery  during crash times
 */
export interface LogEntry {
  timestamp: number;
  operation: 'CREATE' | 'INSERT' | 'UPDATE' | 'DELETE';
  tableName: string;
  data?: any;
}


export interface StorageEngine {
  loadTable(name: string): any[];
  writeTable(name: string, rows: any[]): void;
  appendLog(entry: LogEntry): void;
  replayLog(): LogEntry[];
  listTables(): string[];
}