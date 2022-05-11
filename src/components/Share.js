function Share(props) {
  return (
    <fieldset className="design-share">
      <div
        className="share-legend js-share-container"
        onClick={props.handlerClickColapsibleShare}
      >
        <i className="fa-solid fa-square-share-nodes share-legend__icon"></i>
        <p className="share-legend__text">Comparte</p>
        <i className={`fa-solid fa-angle-up js-arrow3 ${props.arrowShare}`}></i>
      </div>
      <section className={`section-share-1 js-share ${props.triangleShare}`}>
        {/*componente crear tarjeta*/}
        <button
          className="card-button js-button-share"
          onClick={props.handleClickCreateCard}
        >
          <i className="fa-solid fa-address-card card-button__icon"></i>
          <span className="card-button__text">Crear tarjeta</span>
        </button>

        <span className="section-share__line"></span>
      </section>
      <section className="share-newcard card-hidden js-section-link">
        <h3 className="share-newcard__text js-false">
          La tarjeta ha sido creada:
        </h3>
        <a target="blank" className="share-newcard__link js-true" href="">
          {/*{props.apiData.cardUrl || 'url'}*/}
        </a>
        <button className="share-newcard__button js-btn-twitter">
          <a className="link-twitter"></a>
        </button>
        <span className="section-share__line"></span>
      </section>
    </fieldset>
  );
}

export default Share;
