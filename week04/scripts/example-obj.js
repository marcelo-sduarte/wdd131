const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections:[   
            { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
            { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'},
        ],
  };

function addCourse (course){
    const courseName = document.querySelector("#courseName"); /* First create var and assign id html*/
    const courseCode = document.querySelector("#courseCode");
    courseName.textContent = course.name;/* second  assign propery objet to var created*/
    courseCode.textContent = course.code;
}

function displayCourse(section) {
    return `<tr>
            <td>${section.sectionNum}</td>
            <td>${section.roomNum}</td>
            <td>${section.enrolled}</td>
            <td>${section.days}</td>
            <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
    const html = sections.map(displayCourse);
    document.querySelector("#sections").innerHTML = html.join("");
  }


addCourse(aCourse);
renderSections(aCourse.sections);
  