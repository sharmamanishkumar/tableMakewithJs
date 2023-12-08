const name = document.querySelector(".name");
const btn = document.querySelector(".click");
const ero = document.querySelector(".ero");
const list = document.querySelector(".list");
const details = document.querySelector(".details");

const myUser = [
  {
    id: 1,
    username: "john_doe",
    email: "john.doe@example.com",
    age: 28,
    gender: "male",
    address: "123 Main Street, Cityville",
    phone: "+1 (555) 123-4567",
  },
  {
    id: 2,
    username: "jane_smith",
    email: "jane.smith@example.com",
    age: 25,
    gender: "female",
    address: "456 Oak Avenue, Townsville",
    phone: "+1 (555) 987-6543",
  },
  {
    id: 3,
    username: "mike_jones",
    email: "mike.jones@example.com",
    age: 32,
    gender: "male",
    address: "789 Pine Lane, Villagetown",
    phone: "+1 (555) 321-0987",
  },
  {
    id: 4,
    username: "sara_miller",
    email: "sara.miller@example.com",
    age: 22,
    gender: "female",
    address: "101 Elm Street, Hamletville",
    phone: "+1 (555) 567-8901",
  },
  {
    id: 5,
    username: "david_wilson",
    email: "david.wilson@example.com",
    age: 30,
    gender: "male",
    address: "202 Maple Road, Boroughburg",
    phone: "+1 (555) 234-5678",
  },
  {
    id: 6,
    username: "emily_brown",
    email: "emily.brown@example.com",
    age: 26,
    gender: "female",
    address: "303 Birch Street, Township",
    phone: "+1 (555) 876-5432",
  },
  {
    id: 7,
    username: "peter_wang",
    email: "peter.wang@example.com",
    age: 35,
    gender: "male",
    address: "404 Cedar Avenue, Cityburg",
    phone: "+1 (555) 345-6789",
  },
  {
    id: 8,
    username: "olivia_davis",
    email: "olivia.davis@example.com",
    age: 24,
    gender: "female",
    address: "505 Redwood Lane, Villagetown",
    phone: "+1 (555) 789-0123",
  },
  {
    id: 9,
    username: "mark_thompson",
    email: "mark.thompson@example.com",
    age: 31,
    gender: "male",
    address: "606 Spruce Road, Boroughburg",
    phone: "+1 (555) 012-3456",
  },
  {
    id: 10,
    username: "lily_jackson",
    email: "lily.jackson@example.com",
    age: 27,
    gender: "female",
    address: "707 Oak Lane, Hamletville",
    phone: "+1 (555) 234-5678",
  },
];

const arrList = ["apple", "orange", "mongodb", "pepperoni"];
btn.addEventListener("click", () => {
  if (name.value.length === 0) {
    console.log("input");
    ero.classList.add("error");
    ero.classList.remove("d-none");
  }
});

for (const iterator of arrList) {
  const innerlist = document.createElement("h4");
  innerlist.innerHTML = iterator;
  innerlist.style.cursor = "pointer";
  innerlist.addEventListener("click", () => {
    name.value = iterator;
  });
  list.appendChild(innerlist);
}
const userTable = document.querySelector(".userTable");
const bodyTable = document.querySelector("#bodytable");
function showRow(id) {
  console.log(id);
  const findUser = myUser.find((user) => user.id === id);
  console.log(findUser);
}
for (const user of myUser) {
  const userList = document.createElement("tr");
  userList.style.textAlign = "center";
  userList.innerHTML = `
      <td>${user.username} </td>
      <td>${user.email}</td>
      <td>${user.age}</td>
      <td>${user.gender}</td>
      <td>${user.address}</td>
      <td>${user.phone}</td>
      <td> <button onclick="showRow(${user.id})" class="btn btn-primary my-2 btn-small">Show</button></td>
    `;
  bodyTable.appendChild(userList);
}
