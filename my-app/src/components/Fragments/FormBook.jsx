import axios from "axios";
import Button from "../Elements/Button/index.jsx";
import InputForm from "../Elements/Input/index.jsx";
import { instance } from "@/modules/axios/index.js";

async function createBook(formData) {
  try {
    const response = await instance.post('/books', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}


const FormBook = () => {
  const handleCreateBook = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      console.log('sukses')
    } catch (error) {
      console.error("Error during save book:", error);
      // Menampilkan pesan error
    }
  };

  return (
    <form onSubmit={handleCreateBook} action="" className="">
      <div className="p-7">
        <InputForm
          name="title"
          type="text"
          title="Judul"
          placeholder="Judul Buku"
        />
        <InputForm
          name="author"
          type="string"
          title="Author"
          placeholder="author buku"
        />
        <InputForm
          name="publisher"
          title="Publisher"
          type="text"
          placeholder="author buku"
        />
        <InputForm
          name="year"
          title="Tahun Terbit"
          type="text"
          placeholder="author buku"
        />
        <InputForm
          name="pages"
          title="Jumlah Halaman"
          type="text"
          placeholder="author buku"
        />
        <InputForm
          name="image"
          title="Cover"
          type="file"
          placeholder="author buku"
        />
      </div>
      <div className="text-center mb-4 -mt-5">
        <Button classname="bg-blue-700 text-white" type="submit">
          Simpan
        </Button>
      </div>
    </form>
  );
};

export default FormBook;
