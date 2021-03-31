import imgJson from '../../resources/img-json.png';

const ImageMedia = () => {
  return (
    <div className="image-media">
      <div className="box-img-json">
        <img className="img-json" src={imgJson} alt="examplt file json" />
      </div>
      <h4>data.json</h4>
    </div>
  );
};
export default ImageMedia;
