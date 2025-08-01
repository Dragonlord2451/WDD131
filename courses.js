const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {
      sectionNum: 1,
      roomNum: "STC 353",
      enrolled: 26,
      days: "TTh",
      instructor: "Bro T",
    },
    {
      sectionNum: 2,
      roomNum: "STC 347",
      enrolled: 25,
      days: "TTh",
      instructor: "Sis A",
    },
  ],

  // Refactored method to handle both enrolling and dropping
  changeEnrollment: function (sectionNum, add = true) {
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      if (add) {
        this.sections[sectionIndex].enrolled++;
      } else {
        this.sections[sectionIndex].enrolled--;
      }
      renderSections(this.sections);
    }
  }
};

// Set the course name and code in the HTML
function setCourseInfo(course) {
  document.querySelector("#courseName").textContent = course.name;
  document.querySelector("#courseCode").textContent = course.code;
}

// Render the sections into the table
function renderSections(sections) {
  const html = sections.map(
    (section) => `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td>
    </tr>`
  );
  document.querySelector("#sections").innerHTML = html.join("");
}

// Event Listeners
document.querySelector("#enrollStudent").addEventListener("click", () => {
  const sectionNum = parseInt(document.querySelector("#sectionNumber").value);
  aCourse.changeEnrollment(sectionNum, true);
});

document.querySelector("#dropStudent").addEventListener("click", () => {
  const sectionNum = parseInt(document.querySelector("#sectionNumber").value);
  aCourse.changeEnrollment(sectionNum, false);
});

// Initial rendering
setCourseInfo(aCourse);
renderSections(aCourse.sections);
