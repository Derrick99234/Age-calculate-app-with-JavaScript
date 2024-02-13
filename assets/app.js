document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".btn");
  const dayI = document.querySelector(".day i");
  const monthI = document.querySelector(".month i");
  const yearI = document.querySelector(".year i");
  const dayV = document.querySelector(".day i.invalid");
  const monthV = document.querySelector(".month i.invalid");
  const yearV = document.querySelector(".year i.invalid");
  const dayLabel = document.querySelector("label.day");
  const monthLabel = document.querySelector("label.month");
  const yearLabel = document.querySelector("label.year");
  const dayEl = document.getElementById("day");
  const monthEl = document.getElementById("month");
  const yearEl = document.getElementById("year");
  const yearResult = document.querySelector("span.year");
  const monthResult = document.querySelector("span.month");
  const dayResult = document.querySelector("span.day");
  const numbers = document.querySelectorAll("span");

  const inputChecker = () => {
    dayEl.value === ""
      ? ((dayLabel.style.color = "crimson"), dayI.classList.add("show"))
      : ((dayLabel.style.color = "hsl(0, 1%, 44%)"),
        dayI.classList.remove("show"));
    monthEl.value === ""
      ? ((monthLabel.style.color = "crimson"), monthI.classList.add("show"))
      : ((monthLabel.style.color = "hsl(0, 1%, 44%)"),
        monthI.classList.remove("show"));
    yearEl.value === ""
      ? ((yearLabel.style.color = "crimson"), yearI.classList.add("show"))
      : ((yearLabel.style.color = "hsl(0, 1%, 44%)"),
        yearI.classList.remove("show"));
  };

  const validChecker = () => {
    const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const userDay = parseInt(dayEl.value);
    const userMonth = parseInt(monthEl.value);
    const userYear = parseInt(yearEl.value);

    if (userMonth < 1 || userMonth > 12) {
      monthV.classList.add("show");
    } else {
      monthV.classList.remove("show");
    }

    if (userDay < 1 || userDay > 31) {
      dayV.classList.add("show");
    } else {
      dayV.classList.remove("show");
    }

    const date = new Date();

    if (userYear >= date.getFullYear()) {
      yearV.classList.add("show");
    } else {
      yearV.classList.remove("show");
    }
  };

  dayEl.oninput = () => {
    inputChecker();
    validChecker();
  };

  monthEl.oninput = () => {
    inputChecker();
    validChecker();
  };

  yearEl.oninput = () => {
    inputChecker();
    validChecker();
  };
  const calculate_date = () => {
  if (
    dayI.getAttribute("class").includes("show") ||
    monthI.getAttribute("class").includes("show") ||
    yearI.getAttribute("class").includes("show")
  ) {
    alert("Error! Empty Field");
  } else if (
    dayV.getAttribute("class").includes("show") ||
    monthV.getAttribute("class").includes("show") ||
    yearV.getAttribute("class").includes("show")
  ) {
    alert("Error! Please input the right value");
  } else {
    const currentDate = new Date();
    const userDate = new Date(
      parseInt(yearEl.value),
      parseInt(monthEl.value) - 1,
      parseInt(dayEl.value)
    );

    if (userDate > currentDate) {
      alert("Error! Please select a past date.");
      return;
    }

    const ageDate = new Date(currentDate - userDate);

    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
    
 
    yearResult.innerHTML = years;
    monthResult.innerHTML = months;
    dayResult.innerHTML = days;

    numbers.forEach((number) => {
      number.classList.add("numbers");
    });

    dayEl.value = "";
    monthEl.value = "";
    yearEl.value = "";
  }
};

btn.addEventListener("click", calculate_date);

 const inputs = document.querySelectorAll("input");
 inputs.forEach((item) => {
   item.addEventListener("keydown", (e) => {
     if (e.key === "Enter") {
       calculate_date();
     }
   });
 });
});