import header from "../components/header";

const home = () => {
    return(
        <div className="bg-gray-900 text-white min-h-screen">
            <header />

            <section className="flex flex-col items-center justify-center text-center h-screen px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Resume analyzer</h1>
                <p className="text-lg md:text-xl text-gray-300 mb-6">
                    Upload your resume here !!
                </p>
                <a href="/upload" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
                Upload your resume 
                </a>
            </section>
        </div>

    );
};

export default home;