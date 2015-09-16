var redditCloneApp = angular.module("redditCloneApp", ['ui.bootstrap', 'angularMoment']); 
redditCloneApp.controller("PostController", function($scope){
  
  $scope.posts = [{'name': 'tom', 'title': 'Corn', 'picture': 'http://hdwallpapersfit.com/wp-content/uploads/2015/03/scenic-hd-wallpapers.jpg', 'textarea': 'I love cheese! I love cheese! I love cheese! I love cheese! I love cheese! I love cheese! I love cheese! I love cheese!', 'time': '9/15/15', 'comments': [], 'votes': 2},
    {'name': 'bob', 'title': 'broccoli', 'picture': 'http://hdwallpapersfit.com/wp-content/uploads/2015/03/scenic-wallpaper.jpg', 'textarea': 'I love cheese! I love cheese! I love cheese! I love cheese! I love cheese! I love cheese! I love cheese! I love cheese!', 'time': '9/14/15 13:23', 'comments': [{'commentName': 'john', 'comment': 'I love cheese!'}, {'commentName': 'john', 'comment': 'I love cheese!'}], 'votes': 0},
    {'name': 'Jane', 'title': 'Cucumber', 'picture': 'http://www.free-wallpapers.net/wp-content/uploads/2015/07/Scenic-Wallpaper-Backgrounds.jpg', 'textarea': 'I love cheese! I love cheese! I love cheese! I love cheese! I love cheese! I love cheese! I love cheese! I love cheese!', 'time': '1/2/1991', 'comments': [{'commentName': 'john', 'comment': 'I love cheeses!'}], 'votes': 5},
    {'name': 'Riccardo', 'title': 'Tomato', 'picture': 'http://desktopbackgrounds4u.com/wp-content/gallery/free-scenic-pictures/7.jpg', 'textarea': 'I love cheese! I love cheese! I love cheese! I love cheese! I love cheese! I love cheese! I love cheese! I love cheese!', 'time': '1/2/50', 'comments': [{'commentName': 'john', 'comment': 'I love cheese!'}, {'commentName': 'john','comment': 'I love cheese!'}, {'commentName': 'john', 'comment': 'I love cheese!'}], 'votes': -5}
  ];

  $scope.name = "";
  $scope.title = "";
  $scope.picture = "";
  $scope.textarea = "";
  $scope.time = "";
  $scope.comments = [];
  $scope.votes = 0;
  $scope.commentName = "";
  $scope.comment = "";

  // $scope.voteClass = '';


  $scope.saveUser = function(){
    // var post = {'name':this.name, 'title':this.title, 'picture':this.picture, 'textarea': this.textarea, 'time': new Date(), 'comments':this.comments, 'votes': this.votes};

    $scope.posts.push({'name':this.name, 'title':this.title, 'picture':this.picture, 'textarea': this.textarea, 'time': new Date(), 'comments':this.comments, 'votes': this.votes});
   
    this.postForm = false;
    this.name  = this.title = this.picture = this.textarea = "";
  };

  $scope.votesColor = function(votes){
    if (votes > 0) {
      return 'green';
    }
    else if (votes < 0){
      return 'red';
    }
  };

  $scope.saveComment = function() {
    this.post.comments.push({'commentName':this.commentName, 'comment':this.comment});
    this.showCommentForm = false;
    this.showComments = true;
    this.commentName  = this.comment = "";
  };
});

redditCloneApp.run(function(amMoment) {
    amMoment.changeLocale('en');
});

// get sortby drop down working
// organize files, whats needed and whats not

