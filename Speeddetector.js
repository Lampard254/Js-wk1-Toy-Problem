function calculateSpeed() {
    const speedLimit = 70;
    const pointsPerKmAboveLimit = 5;
    
    let carSpeed = 80;
    //checks whether the carSpeed is less than 70. If it is, it returns "OK" 
    if (carSpeed < speedLimit) {
      return = 'Ok';
    } else {
    // driver receives 1 demerit point for every 5 km/h over the speed limit of 70 km/h 
      const demeritPoints = Math.floor((carSpeed - speedLimit) / pointsPerKmAboveLimit);
    //checks whether the number of points exceeds 12. If it does, the result is set to "License suspended"   
      if (demeritPoints > 12) {
        return = 'License suspended';
      } else {
        return = ('Points: ${demeritPoints}') ;
      }
    }
  }
