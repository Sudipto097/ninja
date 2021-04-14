import Link from "next/link";

const NotFound = () =>{
    return(
        <div className="not-found">
            <h1> :) Ooooops.......</h1>
            <h2>That page cannot be found.</h2>
            <p>Go Back To The <Link href="/"><a>Home</a></Link> </p>
        </div>
    );
}

export default NotFound;