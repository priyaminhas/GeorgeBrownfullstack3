var socket = io.connect('http://localhost:3000');
      socket.on('connect',function(){
          console.log("SOCKET - connected");
         socket.emit('download',2);
      })
      socket.on('disconnect',function(){
          console.log("SOCKET - Disconnected");
      })
      socket.on('download-received',function(id){
        console.log('SOCKET-download received from server with id: '+id )
      })