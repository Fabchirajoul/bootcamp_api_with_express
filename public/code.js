document.addEventListener("alpine:init", () => {
  Alpine.data("BOOTCAMPEXPRESSAPI", () => {
    return {
      title: "My BOOTCAMP EXPRESS API USING MATERIALIZE FRAMEWORK",
      titlegreet: "MY GREET API",
      titlewordgame: "MY WORD GAME API",
      titleairtime: "MY ENOUGH AIRTIME API",
      titleTransportFee: "MY TRANSPORT FEE API",
      titlePhoneBill: "MY PHONE BILL API",
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

      // Greet section starts here
      greet() {
        axios
          // .get(`http://localhost:3011/api/greet?name=${this.nameUser}`)
          .get(`/api/greet?name=${this.nameUser}`)

          .then((result) => {
            console.log(this.nameUser);
            this.greetPhrase = result.data.greet;
          });
      },

      // Greet section ends here

      // Word game starts here

      wordGame() {
        axios.get(`/api/word_game?sentence=${this.str}`).then((result) => {
          this.long = result.data.longestWord;
          this.short = result.data.shortestWord;
          this.sentenceLength = result.data.length;
        });
      },
      // Word game ends  here

      // Enough airtime starts here

      enoughAT() {
        axios
          .get(`/api/enoughairtime?sentence=${this.atStr}&amount=${this.AT}`)
          .then((result) => {
            this.airStr = result.data.enoughairtime;
          });
      },
      // Enough airtime ends here
      // Transfort fee starts here
      fee() {
        axios.get(`/api/transportFee?day=${this.daytime}`).then((result) => {
          this.price = result.data.transport;
        });
      },
      // Transport fee ends here
      // Total phone bill starts here

      bill() {
        axios
            .get(`/api/totalphonebill?sentence=${this.strList}`)
            .then((result) => {
                this.returnString = result.data.totalphonebill
            })
    }
      // Total phone bill ends here
    }
  });
});
