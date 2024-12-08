
var quotes = [
    {
        text:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        name:"Albert Einstein"
    }
    ,{
        text:"A room without books is like a body without a soul. ",
        name:"Marcus Tullius Cicero"
    }
    ,{
        text:"You know you're in love when you can't fall asleep because reality is finally better than your dreams. ",
        name:"Dr. Seuss"
    }
    ,{
        text:"In three words I can sum up everything I've learned about life: it goes on. ",
        name:"Robert Frost"
    }
    ,{
        text:"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. ",
        name:"Maya Angelou"
    }
    ,{
        text:"I am so clever that sometimes I don't understand a single word of what I am saying. ",
        name:"Oscar Wilde"
    }
    ,{
        text:"Insanity is doing the same thing, over and over again, but expecting different results. ",
        name:"Narcotics Anonymous"
    }
    ,{
        text:"It is better to be hated for what you are than to be loved for what you are not. ",
        name:"Andre Gide"
    }
    ,{
        text:"Be yourself; everyone else is already taken.",
        name:"Oscar Wilde"
    }
    ,{
        text:"So many books, so little time.",
        name:"Frank Zappa"
    }
    ,{
        text:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        name:"Bernard M. Baruch"
    }
    ];

var quoteText=document.querySelector(".quote_card_text")
var authorName=document.querySelector(".quote_card_author")

function generateQuote(){
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quote = quotes[randomIndex];
    quoteText.innerText = `${quote.text}`;
    authorName.innerText = `- ${quote.name}`;
}
generateQuote();
