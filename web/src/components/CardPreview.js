import Profile from "./Profile";

function CardPreview(props) {
  return (
    <section className="preview-section">
      <div className="preview-section__aliner-div">
        <button className="reset-button js-reset" onClick={props.handleReset}>
          <i className="fa-regular fa-trash-can reset-button__trash"></i>
          <span className="reset-button__text">Reset</span>
        </button>
        <article className="preview-card js_preview">
          <div className="preview-card__div rectangle">
            <h3 className="preview-card__div--name name js-name js_reset-title">
              {props.dataCard.name || "Nombre Apellido"}
            </h3>
            <p className="preview-card__div--profession profession js-profession js_reset-subtitle">
              {props.dataCard.job || "Front-end developer"}
            </p>
          </div>
          <div className="preview-card__image js__profile-image">
            <Profile avatar={props.avatar} />
          </div>
          <nav>
            <ul className="card-list">
              <li className="card-list__item border">
                <a
                  target="blank"
                  href={`tel:${props.dataCard.phone || ""}`}
                  className="card-list__item--link icon-palette js-phone js_reset-telf"
                  title="Teléfono"
                >
                  <i className="fa-solid fa-mobile-screen-button"></i>
                </a>
              </li>
              <li className="card-list__item border">
                <a
                  target="blank"
                  href={`mailto:${props.dataCard.email || ""}`}
                  className="card-list__item--link icon-palette js-email js_reset-send"
                  title="Correo electrónico"
                >
                  <i className="fa-regular fa-envelope"></i>
                </a>
              </li>
              <li className="card-list__item border">
                <a
                  target="blank"
                  href={props.dataCard.linkedin || ""}
                  className="card-list__item--link icon-palette js-linkedin js_reset-lknd"
                  title="Perfil de Linkedin"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li className="card-list__item border">
                <a
                  target="blank"
                  href={props.dataCard.github || ""}
                  className="card-list__item--link icon-palette js-git js_reset-github"
                  title="Perfil de GitHub"
                >
                  <i className="fa-brands fa-github-alt"></i>
                </a>
              </li>
            </ul>
          </nav>
        </article>
      </div>
    </section>
  );
}

export default CardPreview;
