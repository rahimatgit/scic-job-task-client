import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';



const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const image = form.get('image');
        const email = form.get('email');
        const password = form.get('password');
        const validation = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/;

        if (validation.test(password)) {
            console.log('password is valid');
        }
        else {
            return toast.error('Failed to register! Your password must have at least a capital letter, a special character, and not less than 6 digits.');
        }

        createUser(email, password)
            .then(userCredential => {
                const currentUser = userCredential.user;
                currentUser.displayName = name;
                currentUser.photoURL = image;
                toast.success('Your registration is successful.')
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })

    }

    return (
        <div className=" mt-12 flex flex-col md:flex-row ">
            <div className="flex -1">
                <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?w=740&t=st=1699331426~exp=1699332026~hmac=6d816b89eb279508c1125e4311b24edcd5f74dfd7a4320df2ac24b959cb34fdb" alt="" />
            </div>
            <div className="flex-1">
                <div className="hero min-h-screen bg-base-100">
                    <div className="hero-content flex-col ">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl text-center font-bold mb-10">Register now!</h1>

                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleRegister} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input type="text" name="image" placeholder="your image" className="input input-bordered" required />
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
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                    <p className="mt-5">Already have an account? Go to <Link className="font-bold text-blue-800 " to='/login'>Login</Link> page.</p>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Toaster></Toaster>
                </div>
            </div>
        </div>
    );
};

export default Register;