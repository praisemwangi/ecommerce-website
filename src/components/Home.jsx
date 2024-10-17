function Home() {
  const headerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', 
    textAlign: 'center'
  };

  return (
    <header style={headerStyle}>
      <h4>Explore Style With</h4>
      <h1>Sean Cents</h1>
    </header>
  );
}

export default Home;
