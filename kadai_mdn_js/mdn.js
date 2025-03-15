const date = new Date('2025-3-15');
const [year, month, day] = [
  date.getFullYear(),
  date.getMonth() + 1,
  date.getDate(),
]; 

console.log(year + '年' + month + '月' + day + '日');
