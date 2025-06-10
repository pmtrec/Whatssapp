fetch('http://localhost:4000/messages')
  .then(res => res.json())
  .then(data => {
    console.log('✅ Messages reçus :', data);
  })
  .catch(err => {
    console.error('❌ Erreur GET :', err);
  });
