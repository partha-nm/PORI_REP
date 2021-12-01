export const authConstant = {
  // student
  LOGIN_STUDENT_REQ: 'LOGIN_STUDENT_REQ',
  LOGIN_STUDENT_SUCCESS: 'LOGIN_STUDENT_SUCCESS',
  LOGIN_STUDENT_FAIL: 'LOGIN_STUDENT_FAIL',
  GOOGLE_AUTH_URL_STUDENT: 'GOOGLE_AUTH_URL_STUDENT',

  // teacher
  LOGIN_TEACHER_REQ: 'LOGIN_TEACHER_REQ',
  LOGIN_TEACHER_SUCCESS: 'LOGIN_TEACHER_SUCCESS',
  LOGIN_TEACHER_FAIL: 'LOGIN_TEACHER_FAIL',
  GOOGLE_AUTH_URL_TEACHER: 'GOOGLE_AUTH_URL_TEACHER',

  // SuperAdmin
  LOGIN_SUPERADMIN_REQ: 'LOGIN_SUPERADMIN_REQ',
  LOGIN_SUPERADMIN_SUCCESS: 'LOGIN_SUPERADMIN_SUCCESS',
  LOGIN_SUPERADMIN_FAIL: 'LOGIN_SUPERADMIN_FAIL',
  SUPER_LOGOUT_SUCCESS: 'SUPER_LOGOUT_SUCCESS',

  // get paid institutions
  GET_PAID_INS_REQ: 'GET_PAID_INS_REQ',
  GET_PAID_INS_SUCCESS: 'GET_PAID_INS_SUCCESS',
  GET_PAID_INS_FAIL: 'GET_PAID_INS_FAIL',

  //logout
  LOGOUT_REQ: 'LOGOUT_REQ',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAIL: 'LOGOUT_FAIL',

  // update teacher
  UPDATE_TEACHER_REQ: 'UPDATE_TEACHER_REQ',
  UPDATE_TEACHER_SUCCESS: 'UPDATE_TEACHER_SUCCESS',
  UPDATE_TEACHER_FAIL: 'UPDATE_TEACHER_FAIL',

   // GET teacher
   GET_TEACHER_SUCCESS:"GET_TEACHER_SUCCESS",
};

export const studentConstant = {
  //student entry
  STUDENT_ENTRY_REQ: 'STUDENT_ENTRY_REQ',
  STUDENT_ENTRY_SUCCESS: 'STUDENT_ENTRY_SUCCESS',
  STUDENT_ENTRY_FAIL: 'STUDENT_ENTRY_FAIL',

  //fetch instruction
  EXAM_DETAILS_REQ: 'EXAM_DETAILS_REQ',
  EXAM_DETAILS_SUCCESS: 'EXAM_DETAILS_SUCCESS',
  EXAM_DETAILS_FAIL: 'EXAM_DETAILS_FAIL',

  // upload student answer script
  UPLOAD_ANSWER_SCRIPT_REQ: 'UPLOAD_ANSWER_SCRIPT_REQ',
  UPLOAD_ANSWER_SCRIPT_SUCCESS: 'UPLOAD_ANSWER_SCRIPT_SUCCESS',
  UPLOAD_ANSWER_SCRIPT_FAILURE: 'UPLOAD_ANSWER_SCRIPT_FAILURE',

  //Student Submit Status
  SUBMIT_STATUS_REQ: 'SUBMIT_STATUS_REQ',
  SUBMIT_STATUS_SUCCESS: 'SUBMIT_STATUS_SUCCESS',
  SUBMIT_STATUS_FAILURE: 'SUBMIT_STATUS_FAILURE',

  //Student MCQ DETAILS
  STUDENT_MCQ_REQ: 'STUDENT_MCQ_REQ',
  STUDENT_MCQ_SUCCESS: 'STUDENT_MCQ_SUCCESS',
  STUDENT_MCQ_FAILURE: 'STUDENT_MCQ_FAILURE',

  //Student MCQ DETAILS
  UPDATE_STUDENT_MCQ_REQ: 'UPDATE_STUDENT_MCQ_REQ',
  UPDATE_STUDENT_MCQ_SUCCESS: 'UPDATE_STUDENT_MCQ_SUCCESS',
  UPDATE_STUDENT_MCQ_FAILURE: 'UPDATE_STUDENT_MCQ_FAILURE',

  //Student  written Mark
  UPDATE_STUDENT_WRITTEN_MARKS_REQ: 'UPDATE_STUDENT_WRITTEN_MARKS',
  UPDATE_STUDENT_WRITTEN_MARKS_SUCCESS: 'UPDATE_STUDENT_WRITTEN_MARKS',
  UPDATE_STUDENT_WRITTEN_MARKS_FAILURE: 'UPDATE_STUDENT_WRITTEN_MARKS',

  //Student  written Mark get
  GET_STUDENT_WRITTEN_MARKS_REQ: 'GET_STUDENT_WRITTEN_MARKS',
  GET_STUDENT_WRITTEN_MARKS_SUCCESS: 'GET_STUDENT_WRITTEN_MARKS',
  GET_STUDENT_WRITTEN_MARKS_FAILURE: 'GET_STUDENT_WRITTEN_MARKS',

  GET_STUDENT_WRITTEN_LIST_REQ: 'GET_STUDENT_WRITTEN_LIST',
  GET_STUDENT_WRITTEN_LIST_SUCCESS: 'GET_STUDENT_WRITTEN_LIST',
  GET_STUDENT_WRITTEN_LIST_FAILURE: 'GET_STUDENT_WRITTEN_LIST',

  END_EXAM : 'END_EXAM',
  EXAM_STARTED:'EXAM_STARTED',

  UPDATE_PROGRESS : 'UPDATE_PROGRESS'
};

export const instituteConst = {
  // Get all institutes
  GET_ALL_INSTITUTES_REQ: 'GET_ALL_INSTITUTES_REQ',
  GET_ALL_INSTITUTES_SUCCESS: 'GET_ALL_INSTITUTES_SUCCESS',
  GET_ALL_INSTITUTES_FAIL: 'GET_ALL_INSTITUTES_FAIL',

  // Get ONE Institute by ID
  GET_INSTITUTE_REQ: 'GET_INSTITUTE_REQ',
  GET_INSTITUTE_SUCCESS: 'GET_INSTITUTE_SUCCESS',
  GET_INSTITUTE_FAIL: 'GET_INSTITUTE_FAIL',

  //   CREATE INSTITUTE
  CREATE_INSTITUTE_REQ: 'CREATE_INSTITUTE_REQ',
  CREATE_INSTITUTE_SUCCESS: 'CREATE_INSTITUTE_SUCCESS',
  CREATE_INSTITUTE_FAIL: 'CREATE_INSTITUTE_FAIL',

  //   UPDATE INSTITUTE
  UPDATE_INSTITUTE_REQ: 'UPDATE_INSTITUTE_REQ',
  UPDATE_INSTITUTE_SUCCESS: 'UPDATE_INSTITUTE_SUCCESS',
  UPDATE_INSTITUTE_FAIL: 'UPDATE_INSTITUTE_FAIL',

  //   DELETE INSTITUTE
  DELETE_INSTITUTE_REQ: 'DELETE_INSTITUTE_REQ',
  DELETE_INSTITUTE_SUCCESS: 'DELETE_INSTITUTE_SUCCESS',
  DELETE_INSTITUTE_FAIL: 'DELETE_INSTITUTE_FAIL'
};

export const teacherRoomConst = {
  GET_ROOM_REQ: 'GET_ROOM_REQ',
  GET_ROOM_SUCCESS: 'GET_ROOM_SUCCESS',
  GET_ROOM_FAIL: 'GET_ROOM_FAIL',

  GET_ONE_ROOM_REQ: 'GET_ONE_ROOM_REQ',
  GET_ONE_ROOM_SUCCESS: 'GET_ONE_ROOM_SUCCESS',
  GET_ONE_ROOM_FAIL: 'GET_ONE_ROOM_FAIL',

  CREATE_ROOM_REQ: 'CREATE_ROOM_REQ',
  CREATE_ROOM_SUCCESS: 'CREATE_ROOM_SUCCESS',
  CREATE_ROOM_FAIL: 'CREATE_ROOM_FAIL',

  GET_STUDENT_DETAILS_REQ: 'GET_STUDENT_DETAILS_REQ',
  GET_STUDENT_DETAILS_SUCCESS: 'GET_STUDENT_DETAILS_SUCCESS',
  GET_STUDENT_DETAILS_FAIL: 'GET_STUDENT_DETAILS_FAIL',

  UPDATE_STUDENT_SUCCESS : 'UPDATE_STUDENT_SUCCESS',
  DELETE_STUDENT_SUCCESS : 'DELETE_STUDENT_SUCCESS',  

  GET_STUDENTDATA_REQ:"GET_STUDENTDATA_REQ",
  GET_STUDENTDATA_SUCCESS:"GET_STUDENTDATA_SUCCESS",
  GET_STUDENTDATA_FAIL:"GET_STUDENTDATA_FAIL",


  DELETE_EDIT_ROOM_SUCCESS: 'DELETE_EDIT_ROOM_SUCCESS',

  UPLOAD_STUDENTDATA_REQ: 'UPLOAD_STUDENTDATA_REQ',
  UPLOAD_STUDENTDATA_SUCCESS: 'UPLOAD_STUDENTDATA_SUCCESS',
  UPLOAD_STUDENTDATA_FAIL: 'UPLOAD_STUDENTDATA_FAIL',

  SEARCH_ROOM : 'SEARCH_ROOM',
  CLEAR_SEARCH_ROOM : 'CLEAR_SEARCH_ROOM',

  SEARCH_EXAM : 'SEARCH_EXAM',
  CLEAR_SEARCH_EXAM : 'CLEAR_SEARCH_EXAM'
};

// export const teacherRoomConst={

//     GET_ROOM_REQ:"GET_ROOM_REQ",
//     GET_ROOM_SUCCESS:"GET_ROOM_SUCCESS",
//     GET_ROOM_FAIL:"GET_ROOM_FAIL",

//     GET_ONE_ROOM_REQ:"GET_ONE_ROOM_REQ",
//     GET_ONE_ROOM_SUCCESS:"GET_ONE_ROOM_SUCCESS",
//     GET_ONE_ROOM_FAIL:"GET_ONE_ROOM_FAIL",

//     CREATE_ROOM_REQ:"CREATE_ROOM_REQ",
//     CREATE_ROOM_SUCCESS:"CREATE_ROOM_SUCCESS",
//     CREATE_ROOM_FAIL:"CREATE_ROOM_FAIL",

//     GET_STUDENT_DETAILS_REQ:"GET_STUDENT_DETAILS_REQ",
//     GET_STUDENT_DETAILS_SUCCESS:"GET_STUDENT_DETAILS_SUCCESS",
//     GET_STUDENT_DETAILS_FAIL:"GET_STUDENT_DETAILS_FAIL",

//     UPDATE_ROOM_REQ:"UPDATE_ROOM_REQ",
//     UPDATE_ROOM_SUCCESS:"UPDATE_ROOM_SUCCESS",
//     UPDATE_ROOM_FAIL:"UPDATE_ROOM_FAIL",

//     DELETE_ROOM_SUCCESS:"DELETE_ROOM_SUCCESS",

//     UPLOAD_STUDENTDATA_REQ:"UPLOAD_STUDENTDATA_REQ",
//     UPLOAD_STUDENTDATA_SUCCESS:"UPLOAD_STUDENTDATA_SUCCESS",
//     UPLOAD_STUDENTDATA_FAIL:"UPLOAD_STUDENTDATA_FAIL",
// }

export const OneExamConst = {
  // written

  CREATE_WRITTEN_EXAM_REQ: 'CREATE_WRITTEN_EXAM_REQ',
  CREATE_WRITTEN_EXAM_SUCCESS: 'CREATE_EXAM_SUCCESS',
  CREATE_WRITTEN_EXAM_FAIL: 'CREATE_WRITTEN_EXAM_FAIL',

  UPDATE_PROGRESS : 'UPDATE_PROGRESS',

  CREATE_WRITTEN_INSTRUCTIONS_REQ: 'CREATE_WRITTEN_INSTRUCTIONS_REQ',
  CREATE_WRITTEN_INSTRUCTIONS_SUCCESS: 'CREATE_INSTRUCTIONS_SUCCESS',
  CREATE_WRITTEN_INSTRUCTIONS_FAIL: 'CREATE_WRITTEN_INSTRUCTIONS_FAIL',

  UPDATE_WRITTEN_EXAM_REQ: 'UPDATE_WRITTEN_EXAM_REQ',
  UPDATE_WRITTEN_EXAM_SUCCESS: 'UPDATE_WRITTEN_EXAM_SUCCESS',
  UPDATE_WRITTEN_EXAM_FAIL: 'UPDATE_WRITTEN_EXAM_FAIL',

  DELET_WRITTEN_EEXAM_REQ: 'DELETE_WRITTEN_EXAM_REQ',
  DELETE_WRITTEN_EXAM_SUCCESS: 'DELETE_WRITTEN_EXAM_SUCCESS',
  DELETE_WRITTEN_EXAM_FAIL: 'DELETE_WRITTEN_EXAM_FAIL',

  GET_WRITTEN_EEXAM_REQ: 'GET_WRITTEN_EXAM_REQ',
  GET_WRITTEN_EXAM_SUCCESS: 'GET_WRITTEN_EXAM_SUCCESS',
  GET_WRITTEN_EXAM_FAIL: 'GET_WRITTEN_EXAM_FAIL',

  GET_ONE_WRITTEN_EEXAM_REQ: 'GET_ONE_WRITTEN_EXAM_REQ',
  GET_ONE_WRITTEN_EXAM_SUCCESS: 'GET_ONE_WRITTEN_EXAM_SUCCESS',
  GET_ONE_WRITTEN_EXAM_FAIL: 'GET_ONE_WRITTEN_EXAM_FAIL',

  START_WRITTEN_EXAM_REQ: 'START_WRITTEN_EXAM_REQ',
  START_WRITTEN_EXAM_SUCCESS: 'START_WRITTEN_EXAM_SUCCESS',
  START_WRITTEN_EXAM_FAIL: 'START_WRITTEN_EXAM_FAIL',

  // objective

  GET_OBJECTIVE_EXAMS_REQ:'GET_OBJECTIVE_EXAMS_REQ',
  GET_OBJECTIVE_EXAMS_SUCCESS:'GET_OBJECTIVE_EXAMS_SUCCESS',
  GET_OBJECTIVE_EXAMS_FAIL:'GET_OBJECTIVE_EXAMS_FAIL',

  CREATE_MCQ_EXAM_REQ: 'CREATE_MCQ_EXAM_REQ',
  CREATE_MCQ_EXAM_SUCCESS: 'CREATE_MCQ_EXAM_SUCCESS',
  CREATE_MCQ_EXAM_FAIL: 'CREATE_MCQ_EXAM_FAIL',

  CREATE_MCQ_INSTRUCTIONS_REQ: 'CREATE_MCQ_INSTRUCTIONS_REQ',
  CREATE_MCQ_INSTRUCTIONS_SUCCESS: 'CREATE_MCQ_INSTRUCTIONS_SUCCESS',
  CREATE_MCQ_INSTRUCTIONS_FAIL: 'CREATE_MCQ_INSTRUCTIONS_FAIL',

  EDIT_OBJECTIVE_EXAM_REQ: 'EDIT_OBJECTIVE_EXAM_REQ',
  EDIT_OBJECTIVE_EXAM_SUCCESS: 'EDIT_OBJECTIVE_EXAM_SUCCESS',
  EDIT_OBJECTIVE_EXAM_FAIL: 'EDIT_OBJECTIVE_EXAM_FAIL',

  DELETE_OBJECTIVE_EXAM_SUCCESS: 'DELETE_MCQ_EXAM_REQ',

  START_MCQ_EXAM_REQ: 'START_MCQ_EXAM_REQ',
  START_MCQ_EXAM_SUCCESS: 'START_MCQ_EXAM_SUCCESS',
  START_MCQ_EXAM_FAIL: 'START_MCQ_EXAM_FAIL',

  GET_MCQ_EXAM_REQ: 'GET_MCQ_EXAM_REQ',
  GET_MCQ_EXAM_SUCCESS: 'GET_MCQ_EXAM_SUCCESS',
  GET_MCQ_EXAM_FAIL: 'GET_MCQ_EXAM_FAIL',

  GET_ONE_MCQ_EXAM_REQ: 'GET_ONE_MCQ_EXAM_REQ',
  GET_ONE_MCQ_EXAM_SUCCESS: 'GET_ONE_MCQ_EXAM_SUCCESS',
  GET_ONE_MCQ_EXAM_FAIL: 'GET_ONE_MCQ_EXAM_FAIL',  

  // ALL ABOUT MCQ CREATION/EDIT/DELETE
  CREATE_MCQ_REQ: 'CREATE_MCQ_REQ',
  CREATE_MCQ_SUCCESS: 'CREATE_MCQ_SUCCESS',
  CREATE_MCQ_FAILURE: 'CREATE_MCQ_FAILURE',

  EDIT_MCQ_REQ: 'EDIT_MCQ_REQ',
  EDIT_MCQ_SUCCESS: 'EDIT_MCQ_SUCCESS',
  EDIT_MCQ_FAILURE: 'EDIT_MCQ_FAILURE',

  EDIT_INSTRCUTIONS_REQ: 'EDIT_INSTRCUTIONS_REQ',
  EDIT_INSTRCUTIONS_SUCCESS: 'EDIT_INSTRCUTIONS_SUCCESS',
  EDIT_INSTRCUTIONS_FAIL: 'EDIT_INSTRCUTIONS_FAIL',

  DELETE_INSTRCUTIONS_REQ: 'DELETE_INSTRCUTIONS_REQ',
  DELETE_INSTRCUTIONS_SUCCESS: 'DELETE_INSTRCUTIONS_SUCCESS',
  DELETE_INSTRCUTIONS_FAIL: 'DELETE_INSTRCUTIONS_FAIL',

  CREATE_INSTRCUTIONS_REQ: 'CREATE_INSTRCUTIONS_REQ',
  CREATE_INSTRCUTIONS_SUCCESS: 'CREATE_INSTRCUTIONS_SUCCESS',
  CREATE_INSTRCUTIONS_FAIL: 'CREATE_INSTRCUTIONS_FAIL',

  DELETE_MCQ_REQ: 'DELETE_MCQ_REQ',
  DELETE_MCQ_SUCCESS: 'DELETE_MCQ_SUCCESS',
  DELETE_MCQ_FAILURE: 'DELETE_MCQ_FAILURE',

  // ALL ABOUT MCQ OPTIONS
  CREATE_MCQ_OPTIONS_REQ: 'CREATE_MCQ_OPTIONS_REQ',
  CREATE_MCQ_OPTIONS_SUCCESS: 'CREATE_MCQ_OPTIONS_SUCCESS',
  CREATE_MCQ_OPTIONS_FAILURE: 'CREATE_MCQ_OPTIONS_FAILURE',

  EDIT_MCQ_OPTIONS_REQ: 'EDIT_MCQ_OPTIONS_REQ',
  EDIT_MCQ_OPTIONS_SUCCESS: 'EDIT_MCQ_OPTIONS_SUCCESS',
  EDIT_MCQ_OPTIONS_FAILURE: 'EDIT_MCQ_OPTIONS_FAILURE',

  DELETE_MCQ_OPTIONS_REQ: 'DELETE_MCQ_OPTIONS_REQ',
  DELETE_MCQ_OPTIONS_SUCCESS: 'DELETE_MCQ_OPTIONS_SUCCESS',
  DELETE_MCQ_OPTIONS_FAILURE: 'DELETE_MCQ_FAILURE'
};


export const Cheat={ 
  CHEAT_DETECTED:"CHEAT_DETECTED",
  NOT_CHEATING:"NOT_CHEATING"
}