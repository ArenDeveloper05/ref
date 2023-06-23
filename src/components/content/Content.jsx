import { useEffect, useRef, useState } from "react";
import "./Content.scss";

const Content = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const nameRef = useRef(null);

  //   const x = useRef(10);//variable
  //   x.current = 11

  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [message, setMessage] = useState("");

  function handleChange(e) {
    setValues((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }
  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <section className="content">
      <h1>Interior Design</h1>
      <div className="content-showcase" id="showcase">
        <h1>Showcase</h1>
      </div>
      <div className="content-services" id="services">
        <h1>Services</h1>
      </div>
      <div className="content-designers" id="designers">
        <h1>Designers</h1>
      </div>
      <div className="content-contact" id="contact">
        <h1>Contact</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(values);
            if (!values.name) {
              nameRef.current.style.border = "solid red";
              //   console.log(nameRef.current);
              //   console.log("error");
            } else {
              nameRef.current.style.border = "solid ";
            }
          }}
        >
          <input
            type="text"
            placeholder="Name"
            value={values.name}
            name="name"
            ref={nameRef}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <input
            type="text"
            placeholder="Email"
            value={values.email}
            name="email"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <input
            type="text"
            placeholder="Message"
            value={values.message}
            name="message"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <button>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Content;
