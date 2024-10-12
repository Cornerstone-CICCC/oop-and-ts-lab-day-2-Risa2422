"use strict";
// Create a tuple `Course` that contains a course name, an instructor, and a variable-length list of student names.
// - Write a function `addStudent` that adds a student to the tuple and returns a new tuple.
// - Return type: a new tuple with the student added.
function addStudent(course, student) {
    return [...course, student];
}
// Expected output:
addStudent(["Math", "Dr. Smith"], "John"); // ["Math", "Dr. Smith", "John"]
addStudent(["History", "Ms. Brown", "Jane"], "Emma"); // ["History", "Ms. Brown", "Jane", "Emma"]
