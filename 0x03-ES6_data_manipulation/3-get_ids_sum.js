import getListStudentIds from './1-get_list_student_ids';

function getStudentIdsSum(students) {
  const studentIds = getListStudentIds(students);
  const sum = studentIds.reduce((acc, id) => acc + id, 0);
  return sum;
}

export default getStudentIdsSum;
