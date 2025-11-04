export type DataType = 'string' | 'boolean' | 'number' | 'date';
// Row: Represents a single record/row in a table.
export interface Row {
  [columnName: string]: any;
}

