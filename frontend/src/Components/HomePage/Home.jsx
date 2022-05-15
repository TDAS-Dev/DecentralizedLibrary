function Home() {

    const data = [
        {
            image : "",
            name : "Wizard's first Rule",
            link : "www.toubvoeejvbfevoofev.com",
            uploader : "0x72c782vg29r26rv8rv0bvr0r8r2r"
        },
        {
            image : "",
            name : "Revenge of the heckles",
            link : "www.toubvoeejvbfevoofev.com",
            uploader : "0x6vew6wv7wve987wevvwvhdvjwdv8wewvS"
        }

    ]

    return (
        <div classname="">
            {data.map(elem => {
                return (
                    <div className="flex">
                        <img src={elem.image} alt="" />
                        <h1>{elem.name}</h1>
                        <p>{elem.link}</p>
                        <p>{elem.uploader}</p>
                    </div>
                )
            })}
        </div>
      );
}

export default Home;