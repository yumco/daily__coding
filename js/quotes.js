const quotes = [
    { quotes: "Life is not fair; get used to it.",
        author: "I don't konw you have to searching"},

    { quotes: "The world is full of suffering but it is also full of people overcoming it.",
        author: "I don't konw you have to searching"},

    { quotes: "Wear the old coat and buy the new book.",
        author: "I don't konw you have to searching"},

    { quotes: "people feelings are always purest and most glowing in the hour of meeting and of farewell.",
        author: "I don't konw you have to searching"},

    { quotes: "A preoccupation with the future not only prevents us from seeing the present as it is but often prompts us to rearrange the past.",
        author: "I don't konw you have to searching"},

    { quotes: "An unhurried sense of time is in itself a form of wealth.",
        author: "I don't konw you have to searching"},

    { quotes: "Most people get interested in stocks when everyone else is. The time to get interested is when no one else is. You can't buy what is popular and do well.",
        author: "I don't konw you have to searching"},

    { quotes: "Our greatest glory is not in never falling, but in rising every time we fall.",
        author: "I don't konw you have to searching"},

    { quotes: "Judge thyself with the judgment of sincerity, and thou will judge others with the judgment of charity.",
        author: "I don't konw you have to searching"},

    { quotes: "In this life he laughs longest who laughs last.",
        author: "I don't konw you have to searching"},

    { quotes: "Risk comes from not knowing what you're doing.",
        author: "I don't konw you have to searching"},

    { quotes: "What makes the engine go? Desire, desire, desire.",
        author: "I don't konw you have to searching"}


]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText =todaysQuote.author;