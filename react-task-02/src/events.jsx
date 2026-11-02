export default function Events() {
    const helloAlert=()=>{
        alert("Salam!");
    }
    const helloConsole=()=>{
        console.log("Konsolo yaz");
    }
    return(
        <div style={{padding:"50px"}}>
            <button onClick={helloAlert}>Salamla</button>
            <button onClick={helloConsole}>Konsola Yaz</button>
        </div>
    )
}

