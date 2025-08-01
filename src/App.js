import React from 'react';

function App() {
  const doors = Array.from({ length: 11 }, (_, i) => i + 1);
  const [openDoor, setOpenDoor] = React.useState(null);
  const [hoveredDoor, setHoveredDoor] = React.useState(null);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isNarrow = windowWidth < 600;  // breakpoint for responsive switch

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isNarrow ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)',
    gap: '20px',
    justifyContent: 'center',
    marginTop: 50,
    maxWidth: isNarrow ? 320 : 550,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '10px',
    boxSizing: 'border-box',
  };

  const specialDoorStyle = {
    gridColumn: isNarrow ? 'span 2' : 'span 5',  // span full row depending on width
    height: 200,
    maxWidth: isNarrow ? 320 : 635,
  };

  const doorTextStyle = {
    fontSize: 18,
  };

  const todaysTextStyle = {
    fontSize: 45,           // bigger font size
    fontWeight: '900',      // very bold
    marginTop: 6,
    color: '#ffffff',       // pure white
    textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8)', // strong shadow for contrast
    letterSpacing: '1px',   // add some spacing for clarity
  };

  const dateTextStyle = {
    fontSize: 14,
    color: '#ffd700', // gold
    marginTop: 5,
  };

  const doorHover = {
    backgroundColor: '#ff0000ff',
    transform: 'scale(1.05)',
  };

  const containerStyle = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    minHeight: '100vh',
    backgroundImage: 'url(Pictures/Disney-Background.jpg)',  // note the leading slash
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };


  const doorStyle = {
    backgroundColor: 'rgba(25, 118, 210, 0.45)',
    color: 'white',
    borderRadius: 10,
    padding: 20,
    cursor: 'pointer',
    
    userSelect: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 100,
    transition: 'all 0.3s ease',
    border: '2px solid #ffffffff',
    fontWeight: 'bold',
  };

  const [lockedDoor, setLockedDoor] = React.useState(null);
  const [overrideLock, setOverrideLock] = React.useState(false);

  const correctCode = '2012'; // Set your secret 4-digit code here

  const handleOverrideClick = () => {
    const input = prompt('Enter 4-digit override code:');
    if (input === correctCode) {
      setOverrideLock(prev => !prev);
    } else if (input !== null) {
      alert('Incorrect code. Access denied.');
    }
  };



  const doorLinks = {
    1: {
      url: 'https://www.disneyplus.com/play/c9ee959b-7249-4a4c-9708-9ffd1ddb00f1',
      image: 'https://m.media-amazon.com/images/M/MV5BM2ZmNjQ2MzAtNDlhNi00MmQyLWJhZDMtNmJiMjFlOWY4MzcxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      title: 'Gaurdians of the Galaxy',
    },
    2: {
      url: 'https://www.disneyplus.com/play/5f9e4c69-7f78-42d7-b491-dd9e44f27ba1',
      image: 'https://m.media-amazon.com/images/I/81J-IYOA4IL._UF894,1000_QL80_.jpg',
      title: 'Gravity Falls',
    },
    3: {
      url: 'https://www.disneyplus.com/play/afc32deb-a674-4d4b-a87a-bb2b2bf8ef01',
      image: 'https://i.ebayimg.com/00/s/MTYwMFgxMDM1/z/euQAAOSwpE1c5Vl2/$_57.JPG?set_id=8800005007',
      title: 'Brave',
    },
    4: {
      url: 'https://www.disneyplus.com/play/3a5596d6-5133-4a8e-8d21-00e1531a4e0f',
      image: 'https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      title: 'Avengers (2012)',
    },
    5: {
      url: 'https://www.disneyplus.com/play/8cda6d24-155f-46e1-8f9e-9a32b2d462db',
      image: 'https://cdn.europosters.eu/image/750/3187.jpg',
      title: 'High School Musical',
    },
    6: {
      url: 'https://www.disneyplus.com/play/9a280e53-fcc0-4e17-a02c-b1f40913eb0b',
      image: 'https://cdn2.penguin.com.au/covers/original/9781473544888.jpg',
      title: 'Star Wars: A New Hope',
    },
    7: {
      url: 'https://www.disneyplus.com/play/d4b87168-7d0b-49bc-b138-457ab7723feb',
      image: 'https://upload.wikimedia.org/wikipedia/sco/0/0a/Inside_Out_%282015_film%29_poster.jpg',
      title: 'Inside Out',
    },
    8: {
      url: 'https://www.disneyplus.com/play/b463d937-ca30-40fe-ac95-72e232d06872',
      image: 'https://image.tmdb.org/t/p/original/yDVknSU4F7kyZ5o19xIOFbvpBoD.jpg',
      title: 'Brother Bear',
    },
    9: {
      url: 'https://www.disneyplus.com/browse/entity-2fc478cb-0694-49c1-9def-b06cd9cddb6f',
      image: 'https://m.media-amazon.com/images/M/MV5BMTA5MTE2Mzc5MjReQTJeQWpwZ15BbWU4MDk0Njg2ODUx._V1_.jpg',
      title: 'The Descendants',
    },
    10: {
      url: 'https://www.disneyplus.com/play/9c1b0ec2-2e4e-4717-89fb-bdf3a45523df',
      image: 'https://i.ebayimg.com/00/s/MTYwMFgxMTA1/z/r28AAOSwGLVfqn3m/$_57.JPG?set_id=8800005007',
      title: 'Cars',
    },
    11: {
      url: 'https://www.disneyplus.com/play/e291d4ea-cd86-4eb2-9f39-20d2b75165ee',
      image: 'https://cdn.europosters.eu/image/750/120005.jpg',
      title: "Lilo & Stitch",
    },
  };

const doorDates = {
  1: '2025-08-08',
  2: '2025-08-09',
  3: '2025-08-10',
  4: '2025-08-11',
  5: '2025-08-12',
  6: '2025-08-13',
  7: '2025-08-14',
  8: '2025-08-15',
  9: '2025-08-16',
  10: '2025-08-17',
  11: '2025-08-18',  // today
};

  return (
    <div style={containerStyle}>
      <button
        onClick={handleOverrideClick}
        style={{
          position: 'fixed',
          top: 30,
          left: '85%',
          transform: 'translateX(-50%)',
          padding: '4px 8px',
          fontSize: '0.5rem',
          backgroundColor: overrideLock ? '#4caf50' : '#f44336',
          color: '#fff',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer',
          zIndex: 1000,
          fontWeight: 'bold',
        }}

      >
        {overrideLock ? 'Override ON' : 'Override OFF'}
      </button>
      <h1 style={{
        fontFamily: 'Waltograph, cursive',
        fontSize: '2.8rem',
        color: '#ffffffff',
        textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)',
        margin: 0,
        marginTop: '60px'
      }}>
        Countdown to
      </h1>
      <h1 style={{
        fontFamily: 'Waltograph, cursive',
        fontSize: '3.8rem',
        color: '#ff0000ff',
        textShadow: '3px 3px 6px rgba(0,0,0,0.6)',
        marginTop: '20px',
      }}>
        Disneyland!
      </h1>
      <div style={gridStyle}>
        {doors.map((day) => {
          const daysToGo = 11 - day;

          if (day === 11) {
            return (
              <div
                key={day}
                style={{
                  ...doorStyle,
                  ...specialDoorStyle,
                  ...(hoveredDoor === day ? doorHover : {}),
                }}
                onMouseEnter={() => setHoveredDoor(day)}
                onMouseLeave={() => setHoveredDoor(null)}
                onClick={() => {
                  if (overrideLock || isDateTodayOrAfter(doorDates[day])) {
                    setOpenDoor(day);
                    setLockedDoor(null);

                  } else {
                    setLockedDoor(day);
                    setOpenDoor(null);
                  }
              }}

              >
                <div style={doorTextStyle}></div>
                <div>
                  <div style={todaysTextStyle}>Today's the day</div>
                  <div style={dateTextStyle}>{doorDates[day]}</div>
                </div>
              </div>
            );
          }

          return (
            <div
              key={day}
              style={{
                ...doorStyle,
                ...(hoveredDoor === day ? doorHover : {}),
              }}
              onMouseEnter={() => setHoveredDoor(day)}
              onMouseLeave={() => setHoveredDoor(null)}
              onClick={() => {
                if (overrideLock || isDateTodayOrAfter(doorDates[day])) {
                  setOpenDoor(day);
                  setLockedDoor(null);
                } else {
                  setLockedDoor(day);
                  setOpenDoor(null);
                }
              }}


            >
              <div style={doorTextStyle}>
                {daysToGo} day{daysToGo > 1 ? 's' : ''} to go
              </div>
              <div style={dateTextStyle}>{doorDates[day]}</div>
            </div>
          );
        })}
      </div>

{openDoor && (
  <Modal onClose={() => setOpenDoor(null)}>
    <h2 style={{
      fontFamily: 'Georgia, serif',
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#333',
      marginBottom: '1rem',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
      textEmphasis: 'underline',
    }}>
      {doorLinks[openDoor].title}
    </h2>

    <img
      src={doorLinks[openDoor].image}
      alt={doorLinks[openDoor].title}
      style={{ width: '100%', borderRadius: 12, marginBottom: 20 }}
    />
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <a
        href={doorLinks[openDoor].url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '12px 24px',
          backgroundColor: '#ff4081',
          color: '#fff',
          fontWeight: 'bold',
          borderRadius: 8,
          textDecoration: 'none',
          textAlign: 'center',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          transition: 'background-color 0.2s ease',
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#f50057'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#ff4081'}
      >
        Unlock the Magic
      </a>
      <button
        onClick={() => setOpenDoor(null)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#ddd',
          color: '#333',
          border: 'none',
          borderRadius: 8,
          fontWeight: 'bold',
          cursor: 'pointer',
          textAlign: 'center',
          transition: 'background-color 0.2s ease',
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#ccc'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#ddd'}
      >
        Maybe later
      </button>
    </div>
  </Modal>
)}

{lockedDoor && (
  <Modal onClose={() => setLockedDoor(null)}>
    <h2 style={{ color: '#555', fontSize: '1.5rem', marginBottom: '1rem' }}>
      ✨ Patience, please! ✨
    </h2>
    <p style={{ fontSize: '1rem', marginBottom: '1.5rem', color: '#333' }}>
      The magic for day {lockedDoor} will unlock on <strong>{doorDates[lockedDoor]}</strong>.
      Stay tuned and get ready for something special!
    </p>
    <button
      onClick={() => setLockedDoor(null)}
      style={{
        padding: '10px 20px',
        backgroundColor: '#ff4081',
        color: '#fff',
        border: 'none',
        borderRadius: 8,
        fontWeight: 'bold',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => e.target.style.backgroundColor = '#f50057'}
      onMouseLeave={(e) => e.target.style.backgroundColor = '#ff4081'}
    >
      Got it!
    </button>
  </Modal>
)}


{/* Animation keyframes */}
      <style>
        {`
          @keyframes popIn {
            from {
              transform: scale(0.8);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}

function Modal({ children, onClose }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 15,
          border: '4px solid #ff69b4',
          maxWidth: 400,
          width: '90%',
          boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
          animation: 'popIn 0.3s ease',
          textAlign: 'center',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

function isDateTodayOrAfter(doorDateStr) {
  const today = new Date();
  today.setHours(0,0,0,0);  // set to midnight to ignore time

  const doorDate = new Date(doorDateStr);
  doorDate.setHours(0,0,0,0);

  return today >= doorDate;
}

export default App;
