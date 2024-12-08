const attendees = [
  { name: 'Alice', checkedIn: true },
  { name: 'Bob', checkedIn: false },
  { name: 'Charlie', checkedIn: true },
  { name: 'David', checkedIn: true }
];
const attendeesContainer = document.getElementById('attendees-container');
const addAttendeeButton = document.getElementById('add-attendee');
const attendeeNameInput = document.getElementById('attendee-name');
const checkedInCountSpan = document.getElementById('checked-in-count');

function renderAttendees() {
  attendeesContainer.innerHTML = '';
  let checkedInCount = 0;
  attendees.forEach(attendee => {
    const attendeeDiv = document.createElement('div');
    attendeeDiv.classList.add('attendee');
    if (attendee.checkedIn) {
      attendeeDiv.classList.add('checked-in');
      checkedInCount++;
    } else {
      attendeeDiv.classList.add('not-checked-in');
    }
    attendeeDiv.innerHTML = `
      <span>${attendee.name}</span>
      <button data-attendee-index="${attendees.indexOf(attendee)}">
        ${attendee.checkedIn ? 'Check Out' : 'Check In'}
      </button>
    `;
    attendeesContainer.appendChild(attendeeDiv);
  });
  checkedInCountSpan.textContent = checkedInCount;
}

function addAttendee() {
  const attendeeName = attendeeNameInput.value;
  if (attendeeName) {
    attendees.push({ name: attendeeName, checkedIn: false });
    attendeeNameInput.value = '';
    renderAttendees();
  }
}

function toggleCheckIn(index) {
  attendees[index].checkedIn = !attendees[index].checkedIn;
  renderAttendees();
}

attendeesContainer.addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON') {
    const index = parseInt(event.target.dataset.attendeeIndex);
    toggleCheckIn(index);
  }
});

addAttendeeButton.addEventListener('click', addAttendee);

renderAttendees();