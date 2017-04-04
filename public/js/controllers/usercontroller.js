mongoExamApp.controller('userCntrl',function($scope,UserServcie){
        
    console.log("mongo controlle::::");
   
    
    
    $scope.formData ={};
    $scope.myMainSubmit = function(formData){
       /* UserServcie.fname = formData.fname;
        UserServcie.lname = formData.lname;
        UserServcie.email = formData.email;
        UserServcie.username = formData.username;
        UserServcie.password = formData.password;*/
        
        UserServcie.myMainSubmits(formData).then(function(data){
        $scope.responseData = data;
            console.log("response callback "+$scope.responseData)});    
    };
    
    $scope.deleteUser = function(deleteformData){
       // UserServcie.username = deleteformData.username;
       // UserServcie.password = deleteformData.password;
        
        UserServcie.deleteUser(deleteformData).then(function(data){
            $scope.deleteResponseData = data;
            //console.log('response call back after deleting '+$scope.deleteResponseData);
        })
    };
    
    $scope.editUser = function(formEdit){
        //UserServcie.username = formEdit.username;
        //UserServcie.password = formEdit.password;
        
        UserServcie.editUser(formEdit).then(function(response){
                $scope.editResponse = response;
            $scope.update.fname= $scope.editResponse[0].firstname;
            $scope.update.lname = $scope.editResponse[0].lastname;
            $scope.update.email= $scope.editResponse[0].email;
            $scope.update._id = $scope.editResponse[0]._id;
           // console.log("cont resp "+$scope.editResponse);
           
            
        });
    };
    
    $scope.update = function(update){
        UserServcie.update(update);
    }
    
    
    
    
    

    UserServcie.getUsers(function(response){
        $scope.users = response;
    });
    
    
    
    /*$scope.result={};
  $scope.result = UserServcie.getUsers(function(response){
       return JSON.stringify($scope.response);
  });
    console.log("new result "+$scope.result);*/
     // $scope.userFunc= function(){
        //  console.log("im working");
        // return UserServcie.getUsers(function(response){
          // console.log('in controller::::'+JSON.stringify(response));
          // $scope.users = response;
      // });}
                          
});


    
    
    
       
