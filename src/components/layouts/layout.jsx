import { Header, Footer, Admin } from '../';
import {useState, useEffect} from "react";

export const Example = () => {
    let [status, setStatus] = useState('');

    useEffect(() => {
        console.log(status);
    }, [status])

    return (
        <>
            <p>Status: {status}</p>
            <form onSubmit={setStatus()}>
                <label>
                    Status to:
                    <input value={status}></input>
                </label>
                <input type={'submit'} />
            </form>

        </>
    )
}

export const Layout = (leprop) => {
    console.log(leprop);
    return (
        <>
            <Header />
            <h1>Hey</h1>
            <Admin />
            <Footer />
        </>
    )
}