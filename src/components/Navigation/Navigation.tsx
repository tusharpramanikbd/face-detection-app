type Props = {
  onRouteChange: (route: string) => void;
  route: any;
};

function Navigation({ onRouteChange, route }: Props) {
  if (route === "signin") return null;
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      <p
        onClick={() => onRouteChange("signin")}
        className="f3 link dim black underline pa3 pointer"
      >
        Sign Out
      </p>
    </nav>
  );
}

export default Navigation;
