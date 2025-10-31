import { Row, COL_ID_SIZE, COL_EMAIL_SIZE, COL_USERNAME_SIZE } from "../types/row";

const ID_SIZE = COL_ID_SIZE;
const EMAIL_SIZE = COL_EMAIL_SIZE;
const USERNAME_SIZE = COL_USERNAME_SIZE;
const ID_OFFSET = 0;
const USERNAME_OFFSET = ID_SIZE;                    // 4
const EMAIL_OFFSET = ID_SIZE + USERNAME_SIZE;       // 44
const ROW_SIZE = ID_SIZE + USERNAME_SIZE + EMAIL_SIZE; // 144

export function serializeRow(row: Row): Buffer {
  // Write id (4 bytes at offset 0)
  const buffer = Buffer.alloc(ROW_SIZE);
  buffer.writeUInt32LE(row.id, ID_OFFSET);
  // Write userName (40 bytes at offset 4)
  const userNameBytes = buffer.write(row.userName, USERNAME_OFFSET, USERNAME_SIZE, 'utf-8');
  buffer.fill(0, USERNAME_OFFSET + userNameBytes, USERNAME_OFFSET + USERNAME_SIZE);
  // Write email (100 bytes at offset 44) the third parameter is for limiting length
  const emailSizeBytes = buffer.write(row.email, EMAIL_OFFSET, EMAIL_SIZE, 'utf-8');
  buffer.fill(0, EMAIL_OFFSET + emailSizeBytes, EMAIL_OFFSET + EMAIL_SIZE);
  
  return buffer;
}

export function deserializeRow(buffer: Buffer, offset: number = 0): Row {
  // Read Id from offset 0
  const id = buffer.readUInt32LE(offset + ID_OFFSET);
  // Read userName from offset 4
  const userName = buffer
    .toString('utf-8', offset + USERNAME_OFFSET, offset + USERNAME_OFFSET + USERNAME_SIZE)
    .replace(/\0.*$/g, '');
  // Read email from offset 44
  const email = buffer
    .toString('utf-8', offset + EMAIL_OFFSET, offset + EMAIL_OFFSET + EMAIL_SIZE)
    .replace(/\0.*$/g, '');
    
    const row: Row = {
    id: id,
    userName: userName,
    email: email
  };
  return row; 
}