import React, { useContext } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const SocialLogin = () => {

  const { googleLogin, githubLogin } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        console.log("✅ Google Login Success:", result.user)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch(error => {
        console.error("❌ Google Login Failed:", error.message);
      });

  };

  // GitHub Login
  const handleGithubLogin = () => {
    githubLogin()
      .then(result => {
        console.log("✅ GitHub Login Success:", result.user);
      })
      .catch(error => {
        console.error("❌ GitHub Login Failed:", error.message);
      });
  };


  return (
    <div className='hidden md:block'>
      <h2 className='font-bold mb-5'>Login with</h2>
      <div className='space-y-3'>
        {/* google login  */}
        <button type="button" onClick={handleGoogleLogin} className='btn btn-secondary btn-outline w-full'> <FcGoogle size={24}></FcGoogle> Login with Google</button>
        <button type='button' onClick={handleGithubLogin} className='btn btn-primary btn-outline w-full'> <FaGithub size={24}></FaGithub> Login With Github</button>
      </div>
    </div>
  );
};

export default SocialLogin;