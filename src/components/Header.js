import React,{useEffect} from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice'

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(store => store.user)

  const handleSignout = () => {
    signOut(auth).then(() => {})
    .catch((error) => {
      navigate('/error')
    });
  }

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({
          uid:uid,
          email:email,
          displayName: displayName,
          photoURL: photoURL
        
        }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    return ()=> unsubscribe();
  }, [])


  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44 '
      src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      alt="logo"
      />

      {user && <div className='p-2 m-top-4'>
        <img className='w-8 h-8 ' 
          src={user?.photoURL}
          alt="user-logo"
       />
        <button onClick={handleSignout}>sign out</button>
      </div>}
    </div>
  )
}

export default Header
