// Завдання: отримання даних про користувачів
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js

//---------------------------------------------------------------------------

// Завантаження даних з API за допомогою Fetch/Then
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    const usersList = document.querySelector('.usersList');

    data.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      usersList.appendChild(listItem);
    });
  })
  .catch(error => console.log('Error fetching data: ', error));

//----------------------------------------------------------------------------

// Завантаження даних з API за допомогою Async/Await
async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    const usersList = document.querySelector('.usersList2');

    data.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      usersList.appendChild(listItem);
    });
  } catch (error) {
    console.log('Error fetching data: ', error);
  }
}

fetchUsers();
