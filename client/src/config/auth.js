import { auth } from './firebase';

// sign up
export const signupWithEmailAndPassword = (email, password) => {
  auth.createUserWithEmailAndPassword(email, password);
};

// sign in
export const loginWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// sign out
export const logout = () => auth.signOut();

// password reset
export const resetPassword = email => {
  auth.sendPasswordResetEmail(email);
};

// change password
export const updatePassword = password => {
  auth.currentUser.updatePassword(password);
};
