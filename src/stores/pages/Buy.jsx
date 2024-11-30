import { Link } from "react-router-dom";

export default function Buy() {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '50vh',
      padding: '20px',
      boxSizing: 'border-box',
    },
    card: {
      backgroundColor: '#fff', 
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      width: '100%',
      position: 'fixed',
      maxWidth: '400px',
    },
    heading: {
      fontSize: '24px',
      marginBottom: '10px',
    },
    paragraph: {
      fontSize: '16px',
      marginBottom: '20px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      color: '#fff',
      backgroundColor: '#007BFF', 
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease', 
    },
    buttonHover: {
      backgroundColor: '#0056b3', 
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Thank You!</h1>
        <p style={styles.paragraph}>Your order will be delivered in 2 days.</p>
        <p style={styles.paragraph}>Continue shopping by clicking the button below:</p>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <button 
            style={styles.button} 
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
          >
            Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}