document.addEventListener("alpine:init", () => {
  Alpine.data("BOOTCAMPEXPRESSAPI", () => {
    return {
      title: "My BOOTCAMP EXPRESS API USING MATERIALIZE FRAMEWORK",
      titlegreet: "MY GREET API",
      titlewordgame: "MY WORD GAME API",
      titleairtime: "MY ENOUGH AIRTIME API",
      titleTransportFee: "MY TRANSPORT FEE API",
      titlePhoneBill: "MY PHONE BILL API",
      titleWeekDay: "MY WEEKDAY API",
      sentence: "",
      nameUser: "",
      greetPhrase: "",
      selectedLanguage: "",
      strList: "",
      airStr: "",
      AT: 0,
      atStr: "",
      strList: "",
      returnString: "",
      daytime: "",
      price: "",
      str: "",
      long: "",
      short: "",
      sentenceLength: 0,
      weekss:"",
      weekssss:"",
      dayofweek:"",

      // 1 Greet section starts here
      greet() {
        axios
          // .get(`http://localhost:3011/api/greet?name=${this.nameUser}`)
          .get(`/api/greet?name=${this.nameUser}`)

          .then((result) => {
            console.log(this.nameUser);
            this.greetPhrase = result.data.greet;
            setTimeout(() => (this.greetPhrase = "",this.selectedLanguage= "",this.nameUser=""), 3000);
        });
          
      },

      // Greet section ends here

      // 2 Word game starts here

      wordGame() {
        axios
        .get(`/api/word_game?sentence=${this.str}`)
        .then((result) => {
          this.long = result.data.longestWord;
          this.short = result.data.shortestWord;
          this.sentenceLength = result.data.length;
          setTimeout(() => (this.long = "",this.short= "",this.sentenceLength="",this.str=""), 3000);
         
        });
        
      },
      // Word game ends  here

      // 3 Enough airtime starts here

      enoughAT() {
        axios
          .get(`/api/enoughairtime?sentence=${this.atStr}&amount=${this.AT}`)
          .then((result) => {
            this.airStr = result.data.enoughairtime;
            setTimeout(() => (this.airStr = "",this.atStr="",this.AT=""), 3000);
          });
      },
      // Enough airtime ends here
      // 4 Transfort fee starts here
      fee() {
        axios
        .get(`/api/transportFee?day=${this.daytime}`)
        .then((result) => {
          this.price = result.data.transport;
          setTimeout(() => (this.price = ""), 3000);
        });
      },
      // Transport fee ends here
      // 5 Total phone bill starts here

      bill() {
        axios
            .get(`/api/totalphonebill?sentence=${this.strList}`)
            .then((result) => {
                this.returnString = result.data.totalphonebill;
                setTimeout(() => (this.returnString = ""), 3000);
            });
    },
      // Total phone bill ends here
      // weekend or weekday starts here
      weeks() {
        axios
              .get(`/weekOrWeekend?dayofweek=${this.weekss}`)
              .then((result)=>{

                this.weekssss = result.data.weekorweekend
              })

      }
      // weekend or weekday ends here
    }
  });
});
