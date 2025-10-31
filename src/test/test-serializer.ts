import { Row } from '../types/row';
import { serializeRow, deserializeRow } from '../utils/serializer';

//Test 1: Test basic condition
const originalRow: Row = {
  id: 1,
  userName: 'Jumbulbul',
  email: 'jumbulbul2@gmail.com'
};

const serializedBuffer = serializeRow(originalRow);
const deserializedBuffer = deserializeRow(serializedBuffer);

console.log('First Test');

console.log('The real OG:', originalRow);
console.log('Recovered:', deserializedBuffer);

const isRoundSuccessful = JSON.stringify(originalRow) === JSON.stringify(deserializedBuffer);
console.log('  Result:', isRoundSuccessful ? 'pass' : 'next time G');

// Test 2: test empty Rows
const rowWithEmptyFields: Row = {
  id: 2,
  userName: '',
  email: ''
};

const emptyFieldsBuffer = serializeRow(rowWithEmptyFields);
const emptyFieldDeserialized = deserializeRow(emptyFieldsBuffer);
console.log('Second Test');
console.log(`The real G:`, rowWithEmptyFields, 'which has empty fields');

console.log(`Buffer Size:, ${emptyFieldsBuffer.length} bytes`);
console.log('Recovered:', emptyFieldDeserialized);

const isEmptySuccessful = JSON.stringify(rowWithEmptyFields) === JSON.stringify(emptyFieldDeserialized);
console.log('  Result:', isEmptySuccessful ? 'pass' : 'next time G there is a problem with empty');

// Test 3: Maximum field lengths
console.log('\nTest 3: Maximum field lengths');

const maxUserNameLength = 40;
const maxEmailLength = 100;

const rowWithMaxLengths: Row = { 
  id: 999, 
  userName: 'a'.repeat(maxUserNameLength), 
  email: 'b'.repeat(maxEmailLength) 
};

const maxLengthBuffer = serializeRow(rowWithMaxLengths);
const recoveredMaxLengthRow = deserializeRow(maxLengthBuffer);

console.log('  Username length:', rowWithMaxLengths.userName.length, '(max: 40)');
console.log('  Email length:', rowWithMaxLengths.email.length, '(max: 100)');

const areMaxLengthsPreserved = JSON.stringify(rowWithMaxLengths) === JSON.stringify(recoveredMaxLengthRow);
console.log('  Result:', areMaxLengthsPreserved ? 'pass' : 'Fail');

// Test 4: Multiple rows in a single page buffer
console.log('\nTest 4: Multiple rows in a single page buffer');

const rowSizeInBytes = 144;
const numberOfRows = 3;
const pageBuffer = Buffer.alloc(rowSizeInBytes * numberOfRows);

const testRows: Row[] = [
  { id: 1, userName: 'gangOne', email: 'gang1@gmail.com' },
  { id: 2, userName: 'gangTwo', email: 'gang2@gmail.com' },
  { id: 3, userName: 'gangThree', email: 'gang3@gmail.com' }
];

// Serialize and write each row to the page buffer
testRows.forEach((row, rowIndex) => {
  const rowBuffer = serializeRow(row);
  const offsetInPage = rowIndex * rowSizeInBytes;
  rowBuffer.copy(pageBuffer, offsetInPage);
});

// Deserialize and verify each row from the page buffer
console.log('  Verifying rows in page buffer:');
let allRowsValid = true;

for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
  const offsetInPage = rowIndex * rowSizeInBytes;
  const recoveredRow = deserializeRow(pageBuffer, offsetInPage);
  const expectedRow = testRows[rowIndex];
  
  const isRowValid = JSON.stringify(expectedRow) === JSON.stringify(recoveredRow);
  allRowsValid = allRowsValid && isRowValid;
  
  console.log(`    Row ${rowIndex}: ${isRowValid ? 'cool' : 'noo G'}`, recoveredRow);
}

console.log('  Result:', allRowsValid ? 'All good' : 'damn');