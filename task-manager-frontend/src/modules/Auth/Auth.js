import authAPI from './authAPI';

const Auth = {
  isAuthenticated: false,
  user: null,

  // Function to sign in a user
  signIn: async (username, password) => {
    try {
      const token = await authAPI.signIn(username, password);
      if (token) {
        localStorage.setItem('token', token);
        Auth.isAuthenticated = true;
      }
    } catch (error) {
      console.error('Error signing in:', error);
      throw new Error('Invalid username or password');
    }
  },

  // Function to sign out a user
  signOut: () => {
    localStorage.removeItem('token');
    Auth.isAuthenticated = false;
  },

  // Function to check if the user is authenticated
  checkAuth: () => {
    const token = localStorage.getItem('token');
    if (token) {
      Auth.isAuthenticated = true;
    } else {
      Auth.isAuthenticated = false;
    }
  },

  // Function to get the authenticated user's details
  getUser: async () => {
    try {
      const user = await authAPI.getUserDetails();
      Auth.user = user;
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  },
};

export default Auth;