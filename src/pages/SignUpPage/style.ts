import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: var(--gray-800);

    div {
        display: flex;
        height: 100%;
    }

    div.signUp {
        width: 40%;
        justify-content: center;
        align-items: center;
        
        div {
            flex-direction: column;
            justify-content: space-between;
            width: 360px;
            max-height: 520px;
            border-radius: 10px;
            background-color: var(--gray-700);
            padding: 10px 15px;

            h1 {
                font: normal bold 2rem "Poppins", "Inter", sans-serif;
                color: var(--green-300);
                letter-spacing: 0.005rem;
                text-align: center;
                margin-bottom: -5px;
            }

            form {
                display: flex;
                flex-direction: column;
                width: 100%;

                label {
                    font: normal normal 0.9rem "Poppins", "Inter", sans-serif;
                    margin: 3px 0;
                    color: var(--green-300);
                }

                input {
                    width: 100%;
                    height: 35px;
                    background-color: var(--gray-600);
                    border: 0;
                    border-radius: 7px;
                    outline: none;
                    padding: 5px 10px;
                    color: var(--white);
                }
                
                a {
                    font: normal normal 0.8rem "Poppins", "Inter", sans-serif;
                    text-decoration: none;
                    color: var(--green-300);
                    text-align: right;
                    margin: 10px 0;

                    &:hover {
                        text-decoration: underline;
                    }
                }

                button {
                    display: flex;
                    width: 100%;
                    height: 40px;
                    justify-content: center;
                    align-items: center;
                    border: 0;
                    border-radius: 7px;
                    background-color: var(--green-300);
                    color: var(--white);
                    font: normal bold 1.2rem "Poppins", "Inter", sans-serif;
                    margin: 20px 0 5px 0;
                }
            }

            span.noAccount {
                display: flex;
                font: normal normal 0.7rem "Poppins", "Inter", sans-serif;
                margin: 3px 0;
                align-self: flex-end;
                letter-spacing: 0.005rem;
                gap: 3px;
                p {
                    color: var(--white);
                }
                a {
                    text-decoration: none;
                    color: var(--green-300);

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }

            div.socialMedias {
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                width: 100%;
                height: 50px;

                a {
                    height: 100%;
                    width: 30px;
                    color: var(--white);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 3px;
                    border: 0;
                    border-radius: 50%;
                    cursor: pointer;
                    text-decoration: none;

                    &.facebook {
                        background-color: var(--facebook-blue);
                    }

                    &.google {
                        background-color: var(--google-red);
                    }

                    &.github {
                        background-color: var(--gray-600);
                    }
                }
            }
        }
    }

    div.image {
        width: 60%;
    }
`;