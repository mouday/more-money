// import { formatMoney, validateMoney, parseMoney } from "../src/index";
const { formatMoney, validateMoney, parseMoney } = require("../src/index");

// test formatMoney
test("formatMoney", function () {
  expect(formatMoney(null)).toBe("");
  expect(formatMoney(0)).toBe("");

  expect(formatMoney(100)).toBe("1");
  expect(formatMoney(10000)).toBe("100");
  expect(formatMoney(10001)).toBe("100.01");
  expect(formatMoney(10021)).toBe("100.21");
  expect(formatMoney(10030)).toBe("100.3");
});

// test validateMoney
test("validateMoney", function () {
  expect(validateMoney(null)).toBe(false);
  expect(validateMoney(0)).toBe(false);
  expect(validateMoney("")).toBe(false);
  expect(validateMoney("xx")).toBe(false);
  expect(validateMoney("10")).toBe(true);
  expect(validateMoney("10.")).toBe(false);
  expect(validateMoney("10.1")).toBe(true);
  expect(validateMoney("10.12")).toBe(true);
  expect(validateMoney("10.123")).toBe(false);
});

// test parseMoney
test("parseMoney", function () {
  expect(parseMoney("0")).toBe(0);
  expect(parseMoney("")).toBe(0);
  expect(parseMoney(null)).toBe(0);
  expect(parseMoney(0)).toBe(0);

  expect(parseMoney("10")).toBe(1000);
  expect(parseMoney("10.1")).toBe(1010);
  expect(parseMoney("10.12")).toBe(1012);
  expect(parseMoney("10.13")).toBe(1013);
  expect(parseMoney("1")).toBe(100);
  expect(parseMoney("1.1")).toBe(110);
  expect(parseMoney("1.11")).toBe(111);
});
