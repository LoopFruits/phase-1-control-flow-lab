function scuberGreetingForFeet(feet){
  if (199 >= feet){
    return 'This one is on me!';
  } 
    else if (feet >= 2000 && feet < 2500) {
      return 'I will gladly take your thirty bucks.';
    
  }
    else 
    return 'No can do.'
  
}

function ternaryCheckCity(city){
  return (city === 'NYC' ? 'Ok, sounds good' : 'No go.')
}