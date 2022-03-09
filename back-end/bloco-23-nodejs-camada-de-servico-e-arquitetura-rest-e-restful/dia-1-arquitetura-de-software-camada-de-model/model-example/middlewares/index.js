const verifyEmail = (req, res, next) => {
  const { email } = req.body;
  // console.log("FUNÇÃO VERIFY EMAIL");
  // console.log(email);
  
  const regexMail = /\S+@\S+\.\S+/;
  const result = regexMail.test(email);

  if (!email || email === '') {
    return res.status(400).json({ error: true, message: 'Email is required' });
  }

  if (!result) {
    return res.status(400).json({ error: true, message: 'Invalid email' });
  }

  next();
};

module.exports = {
  verifyEmail,
}