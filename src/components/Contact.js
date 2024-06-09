const Contact = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl m-4 p-4">
                Contact Us
            </h1>
            <form>
                <input type="text" name="" id="name" placeholder="Name" className="border border-black ml-4 m-2 p-2 rounded-lg"/>
                <input type="text" name="" id="msg" placeholder="Message" className="border border-black m-2 p-2 rounded-lg"/>
                <button className="bg-gray-100 p-3 m-2 font-bold rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default Contact;