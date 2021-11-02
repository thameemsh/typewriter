const sentence = "hello there from lighthouse labs.";

const sent = sentence + "\n";
for (let i in sent) {
  setTimeout(()=>process.stdout.write(sent[i]),i * 50);
}
