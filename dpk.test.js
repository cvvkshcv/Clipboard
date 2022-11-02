const { deterministicPartitionKey } = require("./dpk");

const testDataShort = "abcdabedefdsfdsafdasfadsfds";
const testDataLong = "abcdabedefdsfdsafdasfadsfds";

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("With partition key", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: testDataShort });
    expect(trivialKey).toBe(testDataShort);
  });

  it("Without partition key and empty object", () => {
    const expectedData = "c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862"
    const trivialKey = deterministicPartitionKey({ });
    expect(trivialKey).toBe(expectedData);
  });

  it("Without partition key and with valid data", () => {
    const expectedData = "ecd528d179e1316f37a005c3d459583e43d1463da87571b649a92b65794917462e0c6103e1d33a123adc0cc6ab557aa8400837b34c48f2734fa15d76342442db"
    const trivialKey = deterministicPartitionKey({ data: testDataLong });
    expect(trivialKey).toBe(expectedData);
  });
  
});
