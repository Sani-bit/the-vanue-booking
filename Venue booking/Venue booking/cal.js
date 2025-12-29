const daysContainer = document.getElementById("days");
const monthTitle = document.getElementById("monthTitle");

// Date constants
const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

// Array of month names
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Example: Available dates (in practice, fetch these from a server)
const availableDates = [
  "2024-11-03", "2024-11-05", "2024-11-07", "2024-11-10",
  "2024-11-12", "2024-11-14"
];

// Function to render the calendar
function renderCalendar() {
  // Clear previous days
  daysContainer.innerHTML = "";

  // Set month title
  monthTitle.innerText = `${monthNames[currentMonth]} ${currentYear}`;

  // Get the first day of the month
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  // Get the total days in the current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Add empty divs for days of the previous month
  for (let i = 0; i < firstDay; i++) {
    const emptyDiv = document.createElement("div");
    emptyDiv.classList.add("empty");
    daysContainer.appendChild(emptyDiv);
  }

  // Add days of the current month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day");
    dayDiv.innerText = day;

    // Highlight available dates
    if (availableDates.includes(date)) {
      dayDiv.classList.add("available");
    }

    daysContainer.appendChild(dayDiv);
  }
}

// Function to change month
function changeMonth(direction) {
  currentMonth += direction;

  // Adjust year if needed
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  } else if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }

  renderCalendar();
}

// Initialize calendar
renderCalendar();
