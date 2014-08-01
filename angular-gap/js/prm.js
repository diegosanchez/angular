function now( msg ) {
  msg = msg || "";
  console.log( msg, new Date() );
};


var promise = function () { 
    var p = new Promise(function(resolve, reject) {
      now('beginning');
      
      // or reject
      reject('error value');

      // succeed
      resolve('resolved value');

      now('ending');
    })

    return p;
};

promise().then(function(value) {
  now( 'Calling first then fn' );
}, function(value) {
  now( 'Calling failed then fn' );
});
