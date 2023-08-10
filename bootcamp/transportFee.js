export default function transportFee(day) {
    let price = "";
    if (day == "morning") {
        price = "Fee for morning shift is R20";
    } else if (day == "afternoon") {
        price = "Fee for afternoon shift is R10";
    } else if (day == "other") {
        price = "This is a Free shift";
    } else {
        price = "Please choose a time";
    }
    return price;
}


