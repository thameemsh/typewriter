const sentence = "hello there from lighthouse labs.";
sent = sentence + "\n"
for (let i in sent) {
 setTimeout(()=>process.stdout.write(sent[i]),i*50);
}

// const sentence = " The future belongs to those who believe in the beauty of their dreams.\n";
// let letter = sentence.slice(" ");
// let delay = 500;
//  for(const char of letter){
//    setTimeout(()=>{
//  process.stdout.write(char);},delay);
//  delay += 50;
//  };