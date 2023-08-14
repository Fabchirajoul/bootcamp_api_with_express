// export default function weekOrWeekend(dayofweek){
// switch(dayofweek){
//   case "Monday":
//    return "week";
//     break;
//     case "Tuesday":
//     return "week";
//     break;
//     case "Wednesday":
//     return "week";
//    break;
//     case "Thursday":
//     return "week";
//     break;
//     case "Friday":
//     return "week";
//     break;
//     case "Saturday":
//     return "weekend";
//     break;
//    case "Sunday":
//     return "weekend";
//    break;
//   default:
//    return "Oops enter a day to check";
//    break;
//          }
// }

export default function weekOrWeekend(dayOfWeek) {

  console.log('INPUT:',dayOfWeek)
  let verdict = "";
  if (dayOfWeek == "Monday") {
    return verdict = "It is a Week day";
  } else if (dayOfWeek == "Tuesday") {
    return verdict = "It is a Week day";
  } else if (dayOfWeek == "Wednesday") {
    return verdict = "It is a Week day";
  } else if (dayOfWeek == "Thursday") { 
    return verdict = "It is a Week day";
  } else if (dayOfWeek == "Friday") {
    return verdict = "It is a Week day";
  } else if (dayOfWeek == "Saturday") {
    return verdict = "It is a Weekend";
  } else if (dayOfWeek == "Sunday") {
    return verdict = "It is a Weekend";
  } else return verdict;


}


