import { FacebookLogo, GithubLogo, GoogleLogo } from "phosphor-react"
import { ChangeEvent, FormEvent, useState } from "react"
import { api } from "../../services/api";
import { Container } from "./style"

export function LoginPage(){

    const [emailOrUsername, setEmailOrUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    function changeEmailOrUsername(e: ChangeEvent<HTMLInputElement>){
        setEmailOrUsername(e.target.value);
    }

    function changePassword(e: ChangeEvent<HTMLInputElement>){
        setPassword(e.target.value);
    }

    async function submitForm(e: FormEvent) {
        e.preventDefault();

        const isEmail = emailOrUsername.includes("@");

        if(isEmail){
            const { data } = await api.post("/user/auth", {
                email: emailOrUsername,
                password: password,
            });

            console.log(data);
        }
        
        const { data } = await api.post("/user/auth", {
            email: emailOrUsername,
            password: password,
        });
        console.log(data);
    }

    return (
        <Container>
            <div className="image">

            </div>
            <div className="login">
                <div>
                    <h1>Login</h1>

                    <form method="post" onSubmit={submitForm}>
                        <label htmlFor="nameUsername">Email or Username</label>
                        <input
                            type="text"
                            name="emailUsername"
                            id="emailUsername"
                            onChange={changeEmailOrUsername}
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={changePassword}
                        />
                        <a href="/forgot-password">Forgot Password?</a>

                        <button type="submit">Login</button>
                    </form>

                    <span className="noAccount">
                        <p>Dont have an account?</p>
                        <a href="/signup">Create Account</a>
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
        </Container>
    )
}