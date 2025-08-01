import React from 'react';

function App() {
  const doors = Array.from({ length: 11 }, (_, i) => i + 1);
  const [openDoor, setOpenDoor] = React.useState(null);
  const [hoveredDoor, setHoveredDoor] = React.useState(null);

  const containerStyle = {
    textAlign: 'center',
    padding: 20,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    minHeight: '100vh',
    backgroundImage: 'url("/pictures/Disney-Background.jpg")',  // <-- fixed path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };


  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 100px)',
    gap: '30px',
    justifyContent: 'center',
    marginTop: 30,
  };

  const doorStyle = {
    width: 100,
    height: 100,
    backgroundColor: '#1976d2',
    color: 'white',
    borderRadius: 15,
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'background-color 0.3s, transform 0.2s',
    padding: '10px',
    textAlign: 'center',
  };

  const specialDoorStyle = {
    width: 620,
    height: 200,
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

  const doorHover = {
    backgroundColor: '#115293',
    transform: 'scale(1.05)',
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

  return (
    <div style={containerStyle}>
      <h1>Countdown to Disneyland!</h1>
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
                <div style={todaysTextStyle}>Today's the day</div>
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
            </div>
          );
        })}
      </div>

      {openDoor && (
        <Modal onClose={() => setOpenDoor(null)}>
          <h2 style={{ color: '#e91e63' }}>✨ {doorLinks[openDoor].title} ✨</h2>
          <img
            src={doorLinks[openDoor].image}
            alt={doorLinks[openDoor].title}
            style={{ width: '100%', borderRadius: 8, marginBottom: 15 }}
          />
          <p>Enjoy this movie!</p>
          <a
            href={doorLinks[openDoor].url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: 'bold', color: '#1976d2', textDecoration: 'underline' }}
          >
            Watch it here
          </a>
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
          boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
          animation: 'popIn 0.3s ease',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button onClick={onClose} style={{ marginTop: 20 }}>Close</button>
      </div>
    </div>
  );
}

export default App;
