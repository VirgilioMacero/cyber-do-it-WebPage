import { useEffect } from "react";
import { useCookies } from "react-cookie";

const SessionTimeoutHandler = ({ timeoutMinutes = 30 }) => {
  //@ts-ignore
  const [cookies, setCookie, removeCookie] = useCookies(["session"]);

  useEffect(() => {
    let timeoutId: number;

    const resetTimeout = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        // Eliminar la cookie de sesión y redirigir al usuario a la página de inicio de sesión
        removeCookie("session");
        window.location.href = "/login"; // Cambia la ruta según tu implementación
      }, timeoutMinutes * 60 * 1000); // Convierte los minutos a milisegundos
    };

    const handleUserActivity = () => {
      resetTimeout();
    };

    // Iniciar el temporizador cuando el componente se monta
    resetTimeout();

    // Agregar listeners de eventos de usuario para reiniciar el temporizador
    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("keypress", handleUserActivity);

    // Limpiar el temporizador y los listeners de eventos cuando el componente se desmonta
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("keypress", handleUserActivity);
    };
  }, [timeoutMinutes, removeCookie]);

  return null; // No renderizar nada, este componente solo maneja la lógica
};

export default SessionTimeoutHandler;
