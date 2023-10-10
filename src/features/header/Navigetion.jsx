import { Link, NavLink } from "react-router-dom";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";

const Navigetion = () => {
    const links = <>
        <li><NavLink to={'/'}>home</NavLink></li>
        <li><NavLink to={'/about'}>about</NavLink></li>
        <li><NavLink to={'/service'}>all event</NavLink></li>
        <li><NavLink to={'/contuct'}>contuct</NavLink></li>
        <li><NavLink to={'/booking'}>booking</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar px-4 md:px-16 py-4 bg-base-100 uppercase font-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to={'/'} className="text-xl">express</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end text-2xl">
                    <div className="srcArea mx-4">
                        <div className="icon"><AiOutlineSearch></AiOutlineSearch></div>

                        <div className="search absolute left-0 top-0 bg-base-100 w-full p-4 hidden justify-center border-b-2">
                            <div className="inner font-normal">
                                <div className="form-control">
                                    <div className="input-group">
                                        <input type="text" placeholder="Search…" className="input input-bordered" />
                                        <button className="btn bg-[#ffbe30] btn-square">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="User mx-4">
                        <Link to={'/login'}><AiOutlineUser></AiOutlineUser></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigetion;