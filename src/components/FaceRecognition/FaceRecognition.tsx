import "./FaceRecognition.css";

type Props = {
  imageUrl: string;
  box: any;
};

function FaceRecognition({
  imageUrl,
  box: { leftCol, topRow, rightCol, bottomRow },
}: Props) {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="input-image"
          src={imageUrl}
          alt="sample"
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: topRow,
            right: rightCol,
            bottom: bottomRow,
            left: leftCol,
          }}
        ></div>
      </div>
    </div>
  );
}

export default FaceRecognition;
