function Footer() {
  const footerStyle = {
      position: 'relative',
      left: 0,
      bottom: 0,
      height: '100px',
      width: '100%',
      backgroundColor: 'rgb(2, 14, 31)',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      
  };

  return (
      <footer style={footerStyle}>
          <p>@ 2024 Sean Cents. All rights reserved.</p>
      </footer>
  );
}

export default Footer;
