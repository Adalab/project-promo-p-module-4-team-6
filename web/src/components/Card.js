import Header from './Header';
import Design from './Design';
import Stuffed from './Stuffed';
import Share from './Share';
import CardPreview from './CardPreview';
import Footer from './Footer';

function Card(props) {
  //FUNCIONES/EVENTOS

  const handlerClickColapsibleDesign = () => {
    props.triangleDesign === ''
      ? props.setTriangleDesign('hidden')
      : props.setTriangleDesign('');
    props.arrowDesign === ''
      ? props.setArrowDesign('collapsible')
      : props.setArrowDesign('');
  };

  const handlerClickColapsibleForm = () => {
    props.triangleForm === ''
      ? props.setTriangleForm('hidden')
      : props.setTriangleForm('');
    props.arrowForm === ''
      ? props.setArrowForm('collapsible')
      : props.setArrowForm('');
  };

  const handlerClickColapsibleShare = () => {
    props.triangleShare === ''
      ? props.setTriangleShare('hidden')
      : props.setTriangleShare('');
    props.arrowShare === ''
      ? props.setArrowShare('collapsible')
      : props.setArrowShare('');
  };

  /*
    if (triangleDesign === '') {
          setTriangleShare('hidden') && setTriangleForm('hidden');
        }*/

  /*if (triangleForm === '') {
          setTriangleShare('hidden') && setTriangleDesign('hidden');
        }*/
  /*if (triangleShare === '') {
          setTriangleForm('hidden') && setTriangleDesign('hidden');}*/

  //manejadora botón crear
  const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    props.dataApi(props.dataCard).then((info) => {
      props.setApiData(info);
    });
  };

  return (
    <div>
      <Header />
      <main className="align-design">
        {/*--PREVIEW--*/}
        <CardPreview
          dataCard={props.dataCard}
          handleReset={props.handleReset}
        />

        <form className="form">
          {/*--DESIGN--*/}
          <Design
            dataCard={props.dataCard}
            handlerClickColapsibleDesign={handlerClickColapsibleDesign}
            handleInput={props.handleInput}
            triangleDesign={props.triangleDesign}
            arrowDesign={props.arrowDesign}
          />

          {/*STUFFED*/}
          <Stuffed
            dataCard={props.dataCard}
            handlerClickColapsibleForm={handlerClickColapsibleForm}
            handleInput={props.handleInput}
            triangleForm={props.triangleForm}
            arrowForm={props.arrowForm}
          />

          {/*SHARE AND CARD*/}
          <Share
            dataCard={props.dataCard}
            handlerClickColapsibleShare={handlerClickColapsibleShare}
            handleInput={props.handleInput}
            triangleShare={props.triangleShare}
            arrowShare={props.arrowShare}
          />
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Card;
