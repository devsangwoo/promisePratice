const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
const getDog = async () => {
  await sleep(1000); //1초
  return "멍멍이";
};
const getCat = async () => {
  await sleep(500); //1초
  return "야옹이";
};
const getTurtle = async () => {
  await sleep(3000); //1초
  return "거북이";
};
const process = async () => {
  const dog = await getDog();
  console.log(dog);
  const cat = await getCat();
  console.log(cat);
  const turtle = await getTurtle();
  console.log(turtle);
};

process();
