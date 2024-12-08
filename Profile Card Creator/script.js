document.getElementById('profile-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const profilePic = document.getElementById('profile-pic').value;

  createProfileCard(name, description, profilePic);

 
  document.getElementById('profile-form').reset();
});

function createProfileCard(name, description, profilePic) {
  const cardContainer = document.getElementById('profile-cards');
  const card = document.createElement('div');
  card.classList.add('profile-card');

  card.innerHTML = `
      <img src="${profilePic}" alt="${name}'s profile picture">`;
    document.getElementById("demo").innerHTML=`
      <div>
          <h2>${name}</h2>
          <p>${description}</p>
      </div>
  `;

  cardContainer.appendChild(card);
}
