import { useState } from "react";

const Upload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.Files[0]);
    };

    const handleUpload = () => {
        if (!file){
            alert("Select a file first");
            return;
        }
        console.log("Uploading your file", file);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <h1 className="text-3xl font-bold mb-4"> Upload your Resume</h1>
            <input type="file" accept=".pdf, .doc, .docx" onChange={handleFileChange} className="mb-4" />
            <button onClick={handleUpload} className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded"> Upload</button>

        </div>
    );
};

export default Upload;