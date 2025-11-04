import { Row } from '../types/core';
import { Schema } from '../types/schema';

/*
   Table: Represents a database table with validation and query capabilities.
   
   Responsibilities:
   - Store rows of data
   - Validate data against schema
   - Enforce constraints (primary keys, types, nullability)
   - Provide query interface (select, filter)
 */
export class Table {
  // Private: rows can only be modified through insert/setAllRows
  private rows: Row[] = [];
  
  constructor(
    public name: string,     
    public schema: Schema     
  ) {}

  /*
     Insert a new row into the table
   */
  insert(row: Row): void {}

  /*
     Select rows from the table
   */
  select(filter?: (row: Row) => boolean): Row[] {
    if (!filter) {
      return [...this.rows]; // Return copy of all rows
    }
    return this.rows.filter(filter); // Return filtered copy
  }

  /*
    Get all rows (for storage operations)
   */
  getAllRows(): Row[] {
    return [...this.rows];
  }

  /*
    Set all rows (when loading from storage)
   */
  setAllRows(rows: Row[]): void {
    this.rows = [...rows]; // Store a copy
  }

  /*
     Validate a row against the schema
   */
  private validate(row: Row): void {}

  /*
     Check primary key uniqueness
     Ensures no duplicate primary key values exist
   */
  private checkPrimaryKey(row: Row): void {}
}