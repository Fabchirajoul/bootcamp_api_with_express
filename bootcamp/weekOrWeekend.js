export default function weekOrWeekend(dayofweek){
switch(dayofweek){
  case "Monday":
   return "week";
    break;
    case "Tuesday":
    return "week";
    break;
    case "Wednesday":
    return "week";
   break;
    case "Thursday":
    return "week";
    break;
    case "Friday":
    return "week";
    break;
    case "Saturday":
    return "weekend";
    break;
   case "Sunday":
    return "weekend";
   break;
  default:
   return "Oops enter a day to check";
   break;
         }
}