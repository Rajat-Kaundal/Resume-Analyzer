import { useState } from "react";

const Upload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file){
            alert("Select a file first");
            return;
        }
        const formData = new FormData();
        formData.append("resume", file);

        const response = await fetch("http://localhost:5000/upload",{
            method : "POST",
            body : formData,
        });
        
        const data = await response.json();
        console.log("AI analysis failed");
        alert("AI Analysis: " + data.analysis);

    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <h1 className="text-3xl font-bold mb-4">Upload your resume</h1>
            <input type="file" accept=".pdf" onChange={handleFileChange} className="mb-4" />
            <button onClick={handleUpload} className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded"> Upload</button>
        </div>
    );
};

export default Upload;