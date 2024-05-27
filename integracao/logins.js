document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const messageDiv = document.getElementById('message');

  // Evento de submissão para o formulário de login
  loginForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;

      const userData = {
          email: email,
          password: password
      };

      fazerLogin(userData);
  });

  async function fazerLogin(userData) {
    try {
        const response = await fetch('URL_RINALDO', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        const data = await response.json();

        if (response.ok) {
            alert('Login bem-sucedido!');
            // Redirecionar o usuário para a página de menu inicial, por exemplo
            window.location.href = '/index';
        } else {
            alert(data.message || 'Erro ao fazer login.');
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        alert('Erro ao conectar com a API de login.');
    }
 }
  // Evento de registar
  registerForm.addEventListener('submit', async function (event) {
      event.preventDefault();

      const username = document.getElementById('registerUsername').value;
      const email = document.getElementById('registerEmail').value;
      const password = document.getElementById('registerPassword').value;

      const userData = {
          username: username,
          email: email,
          password: password
      };

      try {
          const response = await fetch('URL_RINALDO', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(userData)
          });

          const data = await response.json();

          if (response.ok) {
            alert('Usuário cadastrado com sucesso!');
            window.location.href = '/index';
          } else {
            alert(' Erro ao cadastrar usuário.');
          }
      } catch (error) {
          alert('Erro ao conectar com a API de cadastro');
          console.error('Erro ao cadastrar usuário:', error);
      }
  });
});