let bdays = ["10-17", "05-19", "20-19"];

const newbddays = bdays.map((x) => x.replace("-", "/"));
console.log(newbddays);
