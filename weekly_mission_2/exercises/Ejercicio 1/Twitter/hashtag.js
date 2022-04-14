const hashtag = {
    name: "#prueba",
    position: 1,
    tweets: 324,
    class: "Software",

    GeneralInfo: function(){
        return `The hashtag: ${this.name}/${this.class} is in the ${this.position} position with ${this.tweets} tweets`
    }
}

console.log(hashtag.GeneralInfo())