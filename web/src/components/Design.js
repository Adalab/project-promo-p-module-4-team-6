function Design(props) {
  return (
    <fieldset className="design-fieldset">
      <div className="design" onClick={props.handlerClickColapsibleDesign}>
        <i className="fa-regular fa-object-ungroup screens"></i>
        <p className="design__text-design">Diseña</p>
        <i className={`fa-solid fa-angle-up ${props.arrowDesign}`}></i>
      </div>
      {/*--COLORS-*/}
      {/* PALLETE ONE */}
      <section
        className={`design-fieldset__design-section ${props.triangleDesign}`}
      >
        <div className="colors__colors-box">
          <label htmlFor="palette" className="colors">
            COLORES
          </label>
          <input
            className="colors__colors-input"
            type="radio"
            name="palette"
            id="1"
            value="1"
            checked={props.dataCard.palette === '1'}
            onChange={props.handleInput}
          />
          <span className="spectrum-blue1"></span>
          <span className="spectrum-blue2"></span>
          <span className="spectrum-blue3"></span>
        </div>
        {/*PALETTE TWO*/}
        <div className="colors__colors-box">
          <input
            className="colors__colors-input"
            type="radio"
            name="palette"
            id="2"
            value="2"
            checked={props.dataCard.palette === '2'}
            onChange={props.handleInput}
          />
          <span className="spectrum-warm1"></span>
          <span className="spectrum-warm2"></span>
          <span className="spectrum-warm3"></span>
        </div>
        {/*PALETTE THREE*/}
        <div className="colors__colors-box">
          <input
            className="colors__colors-input"
            type="radio"
            name="palette"
            id="3"
            value="3"
            checked={props.dataCard.palette === '3'}
            onChange={props.handleInput}
          />
          <span className="spectrum-mix1"></span>
          <span className="spectrum-mix2"></span>
          <span className="spectrum-mix3"></span>
        </div>
        <span className="cutting-line1"></span>
      </section>
    </fieldset>
  );
}

export default Design;
