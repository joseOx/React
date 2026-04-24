// src/App.jsx
import { useState } from 'react';
import Login from './components/login';
import TaskList from './components/TaskLizt'; // Ojo: lo escribiste con 'z' en tu archivo 

function App() {
  // Verificamos si hay un token al cargar la app
  const [token, setToken] = useState(localStorage.getItem('access'));

  // Esta función se la pasaremos al Login. 
  // Cuando el login sea exitoso, actualizará el estado y cambiará la pantalla.
  const handleLoginSuccess = (newToken) => {
    setToken(newToken);
  };

  // Función simple para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    setToken(null);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Mi Gestor de Tareas</h1>

      {/* Si NO hay token, mostramos el Login */}
      {!token ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        /* Si SÍ hay token, mostramos la lista y un botón de salir */
        <>
          <button
            onClick={handleLogout}
            style={{ marginBottom: '20px', background: 'red', color: 'white' }}
          >
            Cerrar Sesión
          </button>
          <TaskList />
        </>
      )}
    </div>
  );
}

export default App;
