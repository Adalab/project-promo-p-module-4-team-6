import Header from "./Header";
import Design from "./Design";
import Stuffed from "./Stuffed";
import Share from "./Share";
import CardPreview from "./CardPreview";
import Footer from "./Footer";

function Card(props) {
  //FUNCIONES/EVENTOS

  const handlerClickColapsibleDesign = () => {
    props.triangleDesign === ""
      ? props.setTriangleDesign("hidden")
      : props.setTriangleDesign("");
    props.arrowDesign === ""
      ? props.setArrowDesign("collapsible")
      : props.setArrowDesign("");
  };

  const handlerClickColapsibleForm = () => {
    props.triangleForm === ""
      ? props.setTriangleForm("hidden")
      : props.setTriangleForm("");
    props.arrowForm === ""
      ? props.setArrowForm("collapsible")
      : props.setArrowForm("");
  };

  const handlerClickColapsibleShare = () => {
    props.triangleShare === ""
      ? props.setTriangleShare("hidden")
      : props.setTriangleShare("");
    props.arrowShare === ""
      ? props.setArrowShare("collapsible")
      : props.setArrowShare("");
  };

  //manejadora botón crear
  const handleClickCreateCard = () => {
    props.dataApi(props.dataCard).then((info) => {
      props.setApiData(info);
    });
    console.log(props.dataCard);
    props.setBtnTwitter("");
  };

  return (
    <div>
      <Header />
      <main className="align-design">
        {/*--PREVIEW--*/}
        <CardPreview
          dataCard={props.dataCard}
          handleReset={props.handleReset}
          avatar={props.avatar}
          updateAvatar={props.updateAvatar}
          inputRadio1={props.inputRadio1}
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
            uploadImage={props.uploadImage}
            avatar={props.avatar}
            updateAvatar={props.updateAvatar}
          />

          {/*SHARE AND CARD*/}
          <Share
            dataCard={props.dataCard}
            handlerClickColapsibleShare={handlerClickColapsibleShare}
            handleInput={props.handleInput}
            triangleShare={props.triangleShare}
            arrowShare={props.arrowShare}
            handleClickCreateCard={handleClickCreateCard}
            shareTwitter={props.shareTwitter}
            apiData={props.apiData}
            btnTwitter={props.btnTwitter}
          />
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Card;
