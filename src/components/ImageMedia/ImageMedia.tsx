import imgJson from '../../resources/img-json.png';

const ImageMedia = () => {
  return (
    <div className="image-media">
      <div className="box-imgjson">
        <img src={imgJson} alt="examplt file json" height="23" width="21" />
      </div>
      <h4>data.json</h4>
    </div>
  );
};
export default ImageMedia;
