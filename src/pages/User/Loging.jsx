import { Link } from "react-router-dom";

const Loging = () => {
    return (
        <div>
            <div className=" mx-auto flex justify-center min-h-screen bg-base-200">
                <div className="hero-content block">
                    <h1 className="text-5xl font-bold p-8">Login now!</h1>
                    <div className="card p-2 w-full shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
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