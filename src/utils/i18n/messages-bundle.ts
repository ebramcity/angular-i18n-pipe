const messages: Map<String, String> = new Map();

//----------------normal messages---------------------
messages.set("hello_world.fa","سلام دنیا! چه‌طوری؟")
messages.set("hello_world.en","Hello world!")

//----------------parametric messages-----------------
messages.set("hello.fa","سلام ${}!")
messages.set("hello.en","Hello ${}!")

export default messages;