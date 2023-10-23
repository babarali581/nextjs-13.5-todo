import jwt from 'jsonwebtoken';

export default async (req, res) => {
  const { username, password } = req.body;
  console.log('password: ', password);
  console.log('username: ', username);

  // NOTE: For simplicity, using a hardcoded user..
  if (username === 'admin' && password === '12345') {
    const token = jwt.sign({ username }, 'SECRET', { expiresIn: '1h' });
    res.status(200).json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};
