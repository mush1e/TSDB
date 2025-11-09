// This class represents a column in a database system
class Column {
  constructor(
    public name: string,
    public datatype: "number" | "string" | "boolean" | "date",
    public isPrimaryKey: boolean = false,
    public isNullable: boolean = false,
  ) {}
}

// This class represents a schema in a database system
class Schema {
  name: string;
  columns: Column[];
  private hasPK: boolean;

  private generatePrimaryKeyColumn(): Column {
    return new Column("id", "number", true, false);
  }

  getPrimaryKey(): Column {
    const pk = this.columns.find((col) => col.isPrimaryKey);
    if (!pk) {
      throw new Error("schema must have a primary key");
    }
    return pk;
  }

  constructor(name: string, columns: Column[]) {
    this.name = name;
    this.hasPK = false;
    this.columns = [];

    for (const column of columns) {
      if (this.hasPK && column.isPrimaryKey) {
        throw new Error("schema can't have more than one primary key");
      }
      this.columns.push(column);
      this.hasPK = this.hasPK || column.isPrimaryKey;
    }

    if (!this.hasPK) {
      this.columns.push(this.generatePrimaryKeyColumn());
    }
  }
}
