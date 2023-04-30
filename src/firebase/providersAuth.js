import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider();

export const singInGoogleAuth = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credential = GoogleAuthProvider.credentialFromResult(result); // para sacar info para token y authentication
        // const user = result.user; //para veer que ay dentro de ese objeto y sacar loq ue me interes poir destructuración
        // console.log({ user })
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            // user info
            displayName, email, photoURL, uid
        }

    } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        return { ok: false, errorMessage, };
    }
};
