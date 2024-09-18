import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/apiCalls/authApiCall';
import swal from "sweetalert";
import { authActions } from "../../redux/slices/authSlice";
import './style/register.css';


function Register() {
  const dispatch = useDispatch();
  const { registerMessage, notRegisterMessage } = useSelector(state => state.auth);
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handlerRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }));
  };

  React.useEffect(() => {
    if (registerMessage) {
      swal({
        title: registerMessage,
        icon: 'success'
      }).then(isOK => {
        if (isOK) {
          navigate("/login");
        }
      });
    }
    if (notRegisterMessage) {
      swal({
        title: notRegisterMessage,
        icon: 'info'
      }).then(isOK => {
        if (isOK) {
          dispatch(authActions.notRegister(null));
        }
      });
    }
  }, [registerMessage, notRegisterMessage, dispatch, navigate]);

  return (
    <div>
      <main className="main-content mt-0">
        <section className="min-vh-100 mb-8">
          <div className="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg" style={{ backgroundImage: `url('./assets/img/curved-images/curved14.jpg')` }}>
            <span className="mask bg-gradient-dark opacity-6"></span>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5 text-center mx-auto">
                  <h1 className="text-white mb-2 mt-5">Welcome!</h1>
                  <p className="text-lead text-white">Use these awesome forms to login or create new account in your project for free.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row mt-lg-n10 mt-md-n11 mt-n10">
              <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
                <div className="card z-index-0">
                  <div className="card-header text-center pt-4">
                    <h5>Register with</h5>
                  </div>
                  <div className="row px-xl-5 px-sm-4 px-3">
                    {/* Social buttons */}
                  </div>
                  <div className="card-body">
                    <form onSubmit={handlerRegister}>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          aria-label="Name"
                          aria-describedby="name-addon"
                          value={name}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          aria-label="Email"
                          aria-describedby="email-addon"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          aria-label="Password"
                          aria-describedby="password-addon"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="form-check form-check-info text-left">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          I agree to the <a className="text-dark font-weight-bolder">Terms and Conditions</a>
                        </label>
                      </div>
                      <div className="text-center">
                        <button type="submit" className="btn bg-gradient-dark w-100 my-4 mb-2">Sign up</button>
                      </div>
                      <p className="text-sm mt-3 mb-0">Already have an account? <Link to="/login" className="text-dark font-weight-bolder">Sign in</Link></p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Register;
