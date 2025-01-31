function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(people: string[]): string[] {
  return people.map(person => greeter(person));
}

let user = ["Jane User", "John User"];

console.log(greeterArray(user)); // Correct usage with array

// Or handle each individually:
user.forEach(person => console.log(greeter(person)));