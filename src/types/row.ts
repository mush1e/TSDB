/**
 * Row interface for the users table
 * This is what app code works with
 */
export interface Row {
  id:number;
  userName:string;
  email:string;
}

/**
 * Schema Constants for Row Layout. If you want i can move this to another module and create a module for constants
*/
export const COL_ID_SIZE = 4; // equivalent of uint32
export const COL_USERNAME_SIZE = 40; // some names are enormous
export const COL_EMAIL_SIZE = 100; // i know the standard is 255 but 100 why no?
export const ROW_SIZE = COL_ID_SIZE + COL_USERNAME_SIZE + COL_EMAIL_SIZE; // Total size of the row in bytes