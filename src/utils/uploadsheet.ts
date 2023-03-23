import axios from "axios";

export const uploadFile = async (file: any) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post("/spreadsheet/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
