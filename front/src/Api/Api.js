const Api = {
    cards() {
        fetch("http://localhost:9000/cards")
            .then(res => {return res});
      }
}