// function
// function standar
// console.log cara ke 2
function create(): void {
  console.log("wkwkwkwk");
}
create();

// Arrow function
// cara ke 1 console.log

const create2 = (): string => "Hello world";

const result = create2();
console.log(result);

// Parameter
function add(x: number, y: number): void {
  const z = x + y;
  console.log("Hasil akhirnya :" + z);
}
add(30, 20);
