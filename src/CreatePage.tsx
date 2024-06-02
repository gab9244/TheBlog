import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Navigate } from "react-router-dom";
const apiURL = import.meta.env.VITE_REACT_APP_API_URL;

// CreatePost envia uma solicitação fetch onde
const CreatePost = () => {
  // Usaremos as state variables para guardar o titulo e o resumo do post
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const createNewPost = async (ev) => {
    //FormData é usado para construir um conjundo de chaves e valores que representam campos de formularios e seus valores, basicamente um objeto que facilita o envio de dados de formularios via solicitação HTTP
    //No nosso caso usamos o FormData para enviar os dados do formulario para a api post, como pode vewr criamos a variavel data e para cada campo criamos uma chave e como valor damos as state variables com o valor dos campos

    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    ev.preventDefault();

    //Mandamos uma solicitação post para post onde enviamos os dados do formúlario caso a responta seja ok mudamos o valor da state variable redirect para true e então enviamos o usúario para o root usando Navigate
    const response = await fetch(`${apiURL}/post`, {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  };
  if (redirect) {
    return <Navigate to={"/"} />;
  }

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }, { direction: "rtl" }],
      [{ size: ["small", false, "large", "huge"] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];
  return (
    // Quando enviamos o formularío a função createNewPost sera executada
    <form className="CreatePost" onSubmit={createNewPost}>
      {/* Aqui o usuário coloca o seu titulo */}
      <input
        type="title"
        placeholder={"Title"}
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      {/* Aqui o usuário coloca o seu resumo*/}
      <input
        type="summary"
        placeholder={"Summary"}
        value={summary}
        onChange={(ev) => setSummary(ev.target.value)}
      />
      {/* O usuário usarar o input do tipo file para pegar a imagem sobre o conteúdo do post que ele escreverá */}
      <input type="file" onChange={(ev) => setFiles(ev.target.files)} />
      {/* Quill é um editor popular open source então ele acaba sendo uma das melhores opções */}
      <ReactQuill
        value={content}
        onChange={(newValue) => setContent(newValue)}
        modules={modules}
        formats={formats}
      />
      <button>Create a new Post</button>
    </form>
  );
};

export default CreatePost;
