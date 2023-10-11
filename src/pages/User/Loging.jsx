import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Loging = () => {
    const { LoginUser,signInGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const hendleLoging = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        // intergrete
        LoginUser(email, password)
            .then(getUser => {
                const loginUser = getUser.user;
                console.log(loginUser);
                navigate(location?.state ? location.state : `/`);
            })
            .catch((error) => {
                const errorMessage = 'failded to login';
                console.error(errorMessage);
                // ..
            });
    }
    const signInGoogleBtn = (e) => {
       console.log(999);
    }
    return (
        <div>
            <div className=" mx-auto flex justify-center min-h-screen bg-base-200">
                <div className="hero-content block">
                    <h1 className="text-5xl font-bold p-8">Login now!</h1>
                    <div className="card p-2 w-full shadow-2xl bg-base-100">
                        <form onSubmit={hendleLoging} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>

                                {/* <button onClick={signInGoogleBtn} className="btn">google</button> */}
                            </div>

                            <div className="text-center">
                                <span>don't have an account? please <Link className="btn btn-link" to={'/register'}>register</Link> </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loging;