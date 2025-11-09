type DataTypeMap = {
  number: number;
  string: string;
  boolean: boolean;
  date: Date;
};

class Column<T extends keyof DataTypeMap> {
  constructor(
    public name: string,
    public datatype: T,
    public isPrimaryKey: boolean = false,
    public isNullable: boolean = false,
  ) {}
}

class Schema {
  name: string;
  columns: Column<keyof DataTypeMap>[];
  private hasPK: boolean;

  private generatePrimaryKeyColumn(): Column<"number"> {
    return new Column("id", "number", true, false);
  }

  getPrimaryKey(): Column<keyof DataTypeMap> {
    const pk = this.columns.find((col) => col.isPrimaryKey);
    if (!pk) {
      throw new Error("schema must have a primary key");
    }
    return pk;
  }

  constructor(name: string, columns: Column<any>[]) {
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

type Row<T extends Schema> = {
  [K in T["columns"][number]["name"]]: DataTypeMap[Extract<
    T["columns"][number],
    { name: K }
  >["datatype"]];
};
