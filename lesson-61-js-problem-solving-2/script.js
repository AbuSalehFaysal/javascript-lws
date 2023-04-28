// JS Problem solving 2

const sentence =
  "Lorem Faysal ipsum, dolor sit amet consectetur adipisicing elit. Saepe nisi molestiae eum reprehenderit obcaecati, nemo faysalnobis cupiditate optio, debitis ratione eveniet nihil perferendis minima explicabo faysal!";

const numberOfFaysal = sentence.match(/faysal/gi);
console.log(numberOfFaysal.length ?? 0); // 3

const position = sentence.search(/faysal/i); // 7

// for object iteration we can use for(let i in obj) syntax
