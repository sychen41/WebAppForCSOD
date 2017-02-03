angular.module('studentService', [])

.factory('Student', function($http) {
    var studentFactory = {};
    studentFactory.getStudents = function() {
        return $http.get('/api/students');
    };
    studentFactory.addStudent = function(newStudent) {
        return $http.post('api/students', newStudent);   
    };
    studentFactory.getStudentById = function(id) {
        return $http.get('api/students/'+id);
    };
    studentFactory.getStudentsByParentId = function(parent_id) {
        return $http.get('api/students/parentId/'+parent_id);
    };
    studentFactory.updateStudent = function(id, theStudent) {
        return $http.put('api/students/'+id, theStudent);
    };
    studentFactory.deleteStudent = function(id) {
        return $http.delete('/api/students/'+id);
    };
    return studentFactory;
});