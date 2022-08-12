import { FacebookLogo, GithubLogo, GoogleLogo } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function SignUpPage(){
    
    const [name, setName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const [error, setError] = useState<string>("");

    function handleNameChange(e: ChangeEvent<HTMLInputElement>){
        setName(e.target.value);
    }
    function handleUsernameChange(e: ChangeEvent<HTMLInputElement>){
        setUsername(e.target.value);
    }
    function handleEmailChange(e: ChangeEvent<HTMLInputElement>){
        setEmail(e.target.value);   
    }
    function handlePasswordChange(e: ChangeEvent<HTMLInputElement>){
        setPassword(e.target.value);
    }
    function handleConfirmPasswordChange(e: ChangeEvent<HTMLInputElement>){
        setConfirmPassword(e.target.value);
    }

    async function handleSubmitForm(e: FormEvent){
        e.preventDefault();

        const data = {
            name,
            username,
            email,
            password,
        }
        console.log(data)
        const result = await api.post("/user/signup", data);

        console.log(result)
    }

    return (
        <Container>
            <div className="signUp">
                <div>
                    <h1>Create an account</h1>
                    <form method="post" onSubmit={handleSubmitForm}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text" 
                            name="name" 
                            id="name" 
                            onChange={handleNameChange}
                        />
                        <label htmlFor="username">Username</label>
                        <input
                            type="text" 
                            name="username" 
                            id="username" 
                            onChange={handleUsernameChange}
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            type="text" 
                            name="email" 
                            id="email" 
                            onChange={handleEmailChange}
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password" 
                            name="password" 
                            id="password" 
                            onChange={handlePasswordChange}
                        />
                        <label htmlFor="confirm_password">Confirm Password</label>
                        <input
                            type="password" 
                            name="confirm_password" 
                            id="confirm_password" 
                            onChange={handleConfirmPasswordChange}
                        />
                        {
                            error ?? <p className="errorMessage">{error}</p> 
                        }
                        <button type="submit">Sign Up</button>
                    </form>

                    <span className="noAccount">
                        <p>Already have an account?</p>
                        <a href="/login">Login</a>
                    </span>

                    <div className="socialMedias">
                        <a href="#" className="facebook">
                            <FacebookLogo size={30} />
                        </a>
                        <a href="#" className="google">
                            <GoogleLogo size={30} />
                        </a>
                        <a href="#" className="github">
                            <GithubLogo size={30} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="image"></div>
        </Container>
    )
}