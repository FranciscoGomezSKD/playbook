const post = {
    author: "frank",
    date: "13/04/22",
    content: "First post",
    coments: 5,
    likes: 12,
    shares: 22,

    Getpost : function(){
        console.log( `${this.content} has ${this.likes} likes and ${this.shares} shares` )
    }
}

post.Getpost()