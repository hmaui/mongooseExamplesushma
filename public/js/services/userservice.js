mongoExamApp.factory('UserServcie', ['$http', function($http){
    
    var UserServcie = {};
   
    UserServcie.getUsers = function(resp){
        
        var promise = $http.get('/api/users').then(function (response) {
        // The then function here is an opportunity to modify the response
        //console.log("response in service"+JSON.stringify(response));
        // The return value gets picked up by the then in the controller.
       resp(response.data);
            
      });    
    };
    
    function resp(data){
        return data;
    };
    
    
     UserServcie.editUser = function(formEdit){
      return $http({
            method: 'POST',
            url: '/api/edit',
            data:{username:formEdit.username, password:formEdit.password}, headers:'json'
        }).then(function(response){
          var newresp = response.data;  
          console.log(response.data);
          return newresp;
          //respFunc(response.data);
        });
    };
    
    function respFunc(data){
        return data;
    };
    
     UserServcie.update = function(update){
        $http({ method: 'POST', url: '/api/update', data:{fname:update.fname, lname:update.lname, email:update.email,_id:update._id} , headers: 'json' });
   };
    
    
     UserServcie.myMainSubmits = function(formData){
         return $http({ method: 'POST', url: '/api/create', data:{fname:formData.fname, lname:formData.lname, email:formData.email, password:formData.password, username:formData.username} , headers: 'json' }).then(function(response){
        var responsedata = response;
             return responsedata.data  });
   };
    
    
    
    UserServcie.deleteUser = function(deleteformData){
       return $http({
            method: 'POST',
            url: '/api/delete',
            data:{username:deleteformData.username, password:deleteformData.password}, headers:'json'}).then(function(response){
       // console.log('in service '+response.data)
           return response.data;
        });
    };
    
   
    //console.log('userservice'+JSON.stringify(UserServcie));
    return UserServcie;
   
    
   
    
}]);