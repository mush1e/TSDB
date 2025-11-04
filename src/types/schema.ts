import { DataType } from "./core";

/*
  Defines the structure and  defines constraints for a single column. 
 */

export interface ColumnDefinition {
  name: string;
  type: DataType;
  isPrimaryKey?: boolean;
  isNullable?: boolean;
}

export interface Schema {
  [columnName: string]: any;
}
