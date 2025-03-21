import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "@styles/contact.scss";

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, 
            data, import.meta.env.VITE_USER_ID)
      .then(
        (result) => {
          console.log("Message envoyé :", result.text);
          alert("Votre message a bien été envoyé !");
          reset();
        },
        (error) => {
          console.error("Erreur lors de l'envoi :", error.text);
          alert("Une erreur est survenue lors de l'envoi, veuillez réessayer.");
        }
      );
  };

  return (
    <section className="contact">
      <div className="container">
        <h2>Contactez-moi</h2>
        <p>N'hésitez pas à me laisser un message, je vous répondrai dès que possible.</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Le nom est obligatoire" })}
            />
            {errors.name && <span className="error">{errors.name.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              {...register("email", { 
                required: "L'email est obligatoire",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Format d'email invalide"
                }
              })}
            />
            {errors.email && <span className="error">{errors.email.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              {...register("message", { required: "Le message est obligatoire" })}
            />
            {errors.message && <span className="error">{errors.message.message}</span>}
          </div>

          <button type="submit" className="btn btn-primary">Envoyer</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
