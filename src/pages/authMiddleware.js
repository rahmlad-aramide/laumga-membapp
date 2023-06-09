
const authMiddleware = (next) => {
    const userId = localStorage.getItem('userId');
  
    if (!userId) {
      // Redirect the user to the login page
      window.location.href = '/login';
    } else {
      // Proceed to the next middleware or component
      return next();
    }
  };
  
  export default authMiddleware;