function scuberGreetingForFeet(ride) {
  let answer;
  if (ride <= 400) {
    answer = 'This one is on me!';
  } else if (ride > 2000 && ride <= 2500) {
    answer = 'I will gladly take your thirty bucks.';
  } else if (ride > 2500) {
    answer = 'No can do.';
  }
  return answer;
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}
