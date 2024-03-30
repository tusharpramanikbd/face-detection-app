type Props = {
  imageUrl: string;
};

function FaceRecogition({ imageUrl }: Props) {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img src={imageUrl} alt="sample" width="500px" height="auto" />
      </div>
    </div>
  );
}

export default FaceRecogition;
