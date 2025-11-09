// This interface defines the shape of any storage backend
// Each engine will implement this interface

export interface StorageEngine {
  // Initialize the engine (open files, setup memory, etc)
  init(): Promise<void>;

  // Retrieve a value from a table by key
  get(table: string, key: string): Promise<any | undefined>;

  // Set a value in a table by key
  set(table: string, key: string, value: string): Promise<void>;

  // Delete a key from a table
  delete(table: string, key: string): Promise<void>;

  // Retrieve all kv pairs from a table
  all(table: string): Promise<Record<string, any>>;

  // Gracefully close the engine (flush to disk)
  close(): Promise<void>;
}
