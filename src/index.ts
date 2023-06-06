/**
 * 输入整型货币数值，单位为分，返回以元为单位的显示值
 * @param {number} money
 * @returns {string}
 */
export function formatMoney(money: number): string {
  // 为 null / 0 返回 空字符串
  if (!money) {
    return "";
  }

  let money_label = "";

  if (money % 100 == 0) {
    // 保留零位
    money_label = (money * 0.01).toFixed(0);
  } else if (money % 10 == 0) {
    // 保留一位
    money_label = (money * 0.01).toFixed(1);
  } else {
    // 保留两位
    money_label = (money * 0.01).toFixed(2);
  }

  return money_label;
}

/**
 * 将金额格式的字符串转为分为单位的整数
 * @param {string} money
 * @returns {number}
 */
export function parseMoney(money: string): number {
  if (!validateMoney(money)) {
    return 0;
  }

  return Math.round(Number.parseFloat(money) * 100);
}

/**
 * 验证一个字符串是否为金额格式
 * 整数
 * 一位小数
 * 两位小数
 * @param {string} value
 * @returns {boolean}
 */
export function validateMoney(value: string): boolean {
  if (typeof value != "string") {
    return false;
  }

  const re = /^\d+(\.\d{1,2})?$/;
  return re.test(value);
}
