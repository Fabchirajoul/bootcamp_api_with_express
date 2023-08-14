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
  let verdict = "";
  if (dayOfWeek == "Monday") {
    return verdict = "Week";
  } else if (dayOfWeek == "Tuesday") {
    return verdict = "Week";
  } else if (dayOfWeek == "Wednesday") {
    return verdict = "Week";
  } else if (dayOfWeek == "Thursday") { 
    return verdict = "Week";
  } else if (dayOfWeek == "Friday") {
    return verdict = "Week";
  } else if (dayOfWeek == "Saturday") {
    return verdict = "Weekend";
  } else if (dayOfWeek == "Sunday") {
    return verdict = "Weekend";
  } else return verdict;
}
