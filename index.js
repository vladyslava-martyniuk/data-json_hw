let students = [];
    
function addStudent() {
  const student = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    age: document.getElementById('age').value,
    course: document.getElementById('course').value,
    faculty: document.getElementById('faculty').value,
    subjects: document.getElementById('subjects').value
  };

  if (student.firstName && student.lastName) {
    students.push(student);
    updateTable();
    clearInputs();
  } else {
    alert('Будь ласка, заповніть обов\'язкові поля.');
  }
}

function deleteStudent(index) {
  students.splice(index, 1);
  updateTable();
}
function updateTable() {
    const tbody = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
    students.forEach((s, index) => {
      const row = tbody.insertRow();
      row.insertCell(0).textContent = s.firstName;
      row.insertCell(1).textContent = s.lastName;
      row.insertCell(2).textContent = s.age;
      row.insertCell(3).textContent = s.course;
      row.insertCell(4).textContent = s.faculty;
      row.insertCell(5).textContent = s.subjects;
      const deleteCell = row.insertCell(6);
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Видалити';
      deleteBtn.className = 'delete-btn';
      deleteBtn.onclick = () => deleteStudent(index);
      deleteCell.appendChild(deleteBtn);
    });
  }

  function clearInputs() {
    document.querySelectorAll('input').forEach(input => input.value = '');
  }