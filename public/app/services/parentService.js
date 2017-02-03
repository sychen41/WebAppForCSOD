angular.module('parentService', [])

.factory('Parent', function($http) {
    var parentFactory = {};
    parentFactory.getParents = function() {
        return $http.get('/api/parents');
    };
    parentFactory.addParent = function(newParent) {
        return $http.post('api/parents', newParent);   
    };
    parentFactory.getParentById = function(id) {
        return $http.get('api/parents/'+id);
    };
    parentFactory.updateParent = function(id, theParent) {
        return $http.put('api/parents/'+id, theParent);
    };
    parentFactory.deleteParent = function(id) {
        return $http.delete('/api/parents/'+id);
    };
    return parentFactory;
});