const greeting = (user) => {
    const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
    console.log(`Welcome ${userDisplay}!`);
  };
  
  greeting(); // Welcome usuário!

  const greetingSimplified = (user = 'usuário') => console.log(`Welcome ${user}!`);

  greetingSimplified(); // Welcome usuário!