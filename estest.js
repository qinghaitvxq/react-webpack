
const bar = 10;


const work=new Promise((resolve, reject) => {
  resolve('some data');
});

work.then((data) => {
  console.log(data);
});
