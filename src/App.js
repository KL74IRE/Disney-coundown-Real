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
    fontSize: 22,
    fontWeight: '900',
    marginTop: 6,
    color: '#ffeb3b',
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


  const doorLinks = {
    1: {
      url: 'https://www.netflix.com/watch/70026002',
      image: 'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
      title: 'Avengers: Infinity War',
    },
    2: {
      url: 'https://www.disneyplus.com/movies/the-lion-king-2019/9c3hIHg1aNx8',
      image: 'https://image.tmdb.org/t/p/w500/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg',
      title: 'The Lion King (2019)',
    },
    3: {
      url: 'https://www.netflix.com/watch/80117470',
      image: 'https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg',
      title: 'Stranger Things',
    },
    4: {
      url: 'https://www.disneyplus.com/movies/frozen-ii/3j3U6FaYQHHT',
      image: 'https://image.tmdb.org/t/p/w500/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg',
      title: 'Frozen II',
    },
    5: {
      url: 'https://www.netflix.com/watch/80192098',
      image: 'https://image.tmdb.org/t/p/w500/lFSSLTlFozwpaGlO31OoUeirBgQ.jpg',
      title: 'The Witcher',
    },
    6: {
      url: 'https://www.disneyplus.com/movies/star-wars-episode-vii-the-force-awakens/7ze7YNmCa8zX9NNZV9h8N8VPhzN',
      image: 'https://image.tmdb.org/t/p/w500/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg',
      title: 'Star Wars: The Force Awakens',
    },
    7: {
      url: 'https://www.netflix.com/watch/80234304',
      image: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
      title: 'Black Panther',
    },
    8: {
      url: 'https://www.disneyplus.com/movies/toy-story-4/6UQi7OEdX2bQ',
      image: 'https://image.tmdb.org/t/p/w500/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg',
      title: 'Toy Story 4',
    },
    9: {
      url: 'https://www.netflix.com/watch/80117498',
      image: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
      title: 'Joker',
    },
    10: {
      url: 'https://www.disneyplus.com/movies/moana/4Je9KsYp4vId',
      image: 'https://image.tmdb.org/t/p/w500/z4x0Bp48ar3Mda8KiPD1vwSY3D8.jpg',
      title: 'Moana',
    },
    11: {
      url: 'https://www.disneyplus.com/movies/mulan-2020/3X6d3k84QvKQ',
      image: 'https://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg',
      title: "Mulan (2020)",
    },
  };

  const doorDates = {
  1: '8th Aug',
  2: '9th Aug',
  3: '10th Aug',
  4: '11th Aug',
  5: '12th Aug',
  6: '13th Aug',
  7: '14th Aug',
  8: '15th Aug',
  9: '16th Aug',
  10: '17th Aug',
  11: '18th Aug', // Today’s the day
};


  return (
    <div style={containerStyle}>
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
                onClick={() => setOpenDoor(day)}
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
              onClick={() => setOpenDoor(day)}
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
      fontSize: '2rem',
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


export default App;
