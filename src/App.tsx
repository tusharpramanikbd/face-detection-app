import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import ParticlesBg from "particles-bg";
import { BaseSyntheticEvent, Component } from "react";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import SignIn from "./components/SignIn/SignIn";

const IMAGE_URL = "https://samples.clarifai.com/metro-north.jpg";
const MODEL_ID = "face-detection";
class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      input: "",
      imageUrl: "",
      box: {},
    };
  }

  calculateFaceLocation = (data: any) => {
    const clarifaiFace =
      data?.outputs[0]?.data?.regions[0]?.region_info?.bounding_box;
    const image: any = document.getElementById("input-image");
    const width = Number(image?.width);
    const height = Number(image?.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayFaceBox = (box: any) => {
    this.setState({ box });
  };

  getClarifiRequestOptions = (imageUrl: string) => {
    const PAT = "81c8f0e2c9a84ab7b8fca1e0d4dd0b75";
    const USER_ID = "tushar-pramanik";
    const APP_ID = "face-detection-app";
    const IMAGE_URL = imageUrl;

    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: IMAGE_URL,
            },
          },
        },
      ],
    });

    return {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };
  };

  onInputChange = (event: BaseSyntheticEvent) => {
    this.setState({ input: event.target.value });
  };

  onSubmit = async () => {
    this.setState({ imageUrl: this.state.input });
    try {
      const response = await fetch(
        "https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs",
        this.getClarifiRequestOptions(this.state.input)
      );

      const result = await response.json();
      this.displayFaceBox(this.calculateFaceLocation(result));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="App">
        <ParticlesBg type="cobweb" bg={true} />
        <Navigation />
        <SignIn />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        {this.state.imageUrl && (
          <FaceRecognition
            box={this.state.box}
            imageUrl={this.state.imageUrl}
          />
        )}
      </div>
    );
  }
}

export default App;
