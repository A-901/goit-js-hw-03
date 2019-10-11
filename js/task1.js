const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
user.mod = 'happy';
user.hobby = 'javascript';
user.premium = false;
console.log(user);
const userInfo = Object.keys(user);
for (const values of userInfo) {
  console.log( `${values}:`, user[values]);
}
