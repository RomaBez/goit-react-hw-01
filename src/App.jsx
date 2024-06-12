const alertStyles = {
  margin: 8,
  padding: "12px 16px",
  borderRadius: 4,
  backgroundColor: "gray",
  color: "white",
};

export const App = () => {
  return (
    <>
      <p style={alertStyles}>Please update your email!</p>
      <p style={alertStyles}>There was an error during transaction!</p>
      <p style={alertStyles}>Payment received, thank you for your purchase!</p>
    </>
  );
};

export default App 