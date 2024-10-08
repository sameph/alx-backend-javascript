function getListStudentIds(listStudents) {
  let listStudentsId = [];
  if (!(listStudents instanceof Array)) {
    return [];
  }
  listStudentsId = listStudents.map((student) => student.id);
  return listStudentsId;
}

export default getListStudentIds;
