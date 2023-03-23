import { useState } from "react";
import axios from "axios";

const UploadForm = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile: any = event.target.files?.[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    file && formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:3000/spreadsheet/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="file">Select a spreadsheet file:</label>
        <input type="file" id="file" name="file" onChange={handleFileChange} />
      </div>
      <button type="submit" disabled={!file}>
        Upload
      </button>
    </form>
  );
};

export default UploadForm;
