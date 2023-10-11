import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const hendleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoURL = form.get('PhotoURL');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, photoURL, password);

        // intergrete
        createUser(email, password)
            .then(setUser => {
                const newUser = setUser.user;
                console.log(newUser);

                // 
                updateProfile(setUser.user, {
                    displayName: name,
                    photoURL: photoURL,
                })
                .then(()=> {console.log('updateed');})
                .catch()
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.error(errorMessage);
                // ..
            });
    }
    return (
        <div>
            <div className=" mx-auto flex justify-center min-h-screen bg-base-200">
                <div className="hero-content block">
                    <h1 className="text-5xl font-bold p-8">Register Account</h1>
                    <div className="card p-2 w-full shadow-2xl bg-base-100">
                        <form onSubmit={hendleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" placeholder="Photo Url" name="PhotoURL" className="input input-bordered" />
                            </div>
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
                                <button className="btn btn-primary">register</button>
                            </div>

                            <div className="text-center">
                                <span> have an account? please <Link className="btn btn-link" to={'/login'}>login</Link> </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;