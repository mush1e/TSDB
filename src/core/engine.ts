export interface StorageEngine<T = any> {
  init(): Promise<void>;
  get(table: string, key: string): Promise<T | undefined>;
  set(table: string, key: string, value: T): Promise<void>;
  delete(table: string, key: string): Promise<void>;
  all(table: string): Promise<Record<string, T>>;
  close(): Promise<void>;
}
