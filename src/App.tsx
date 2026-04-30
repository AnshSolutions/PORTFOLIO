import React from 'react';
import './App.css';

function App() {
  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '30px' }}>
          My Portfolio
        </h1>
        
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#555', marginBottom: '20px' }}>My Projects</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '20px' 
          }}>
            
            {/* Project 1 */}
            <div style={{ 
              backgroundColor: 'white', 
              padding: '20px', 
              borderRadius: '8px', 
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              border: '1px solid #e0e0e0'
            }}>
              <h3 style={{ color: '#333', marginBottom: '10px' }}>YouTube Backend API</h3>
              <p style={{ color: '#666', marginBottom: '15px', lineHeight: '1.5' }}>
                A robust and scalable backend API for a YouTube-like video platform built with Node.js, Express, and MongoDB.
              </p>
              <div style={{ marginBottom: '15px' }}>
                <span style={{ 
                  backgroundColor: '#68A063', 
                  color: 'white', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  marginRight: '5px',
                  fontSize: '12px'
                }}>Node.js</span>
                <span style={{ 
                  backgroundColor: '#000000', 
                  color: 'white', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  marginRight: '5px',
                  fontSize: '12px'
                }}>Express</span>
                <span style={{ 
                  backgroundColor: '#47A248', 
                  color: 'white', 
                  padding: '4px 8px', 
                  borderRadius: '4px',
                  fontSize: '12px'
                }}>MongoDB</span>
              </div>
              <a 
                href="https://github.com/AnshSolutions/videotube-backend" 
                target="_blank" 
                rel="noreferrer"
                style={{ 
                  color: '#007bff', 
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}
              >
                View on GitHub →
              </a>
            </div>

            {/* Project 2 */}
            <div style={{ 
              backgroundColor: 'white', 
              padding: '20px', 
              borderRadius: '8px', 
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              border: '1px solid #e0e0e0'
            }}>
              <h3 style={{ color: '#333', marginBottom: '10px' }}>StudyNotion</h3>
              <p style={{ color: '#666', marginBottom: '15px', lineHeight: '1.5' }}>
                A comprehensive ed-tech platform designed to enable users to create, consume, and rate educational content.
              </p>
              <div style={{ marginBottom: '15px' }}>
                <span style={{ 
                  backgroundColor: '#47A248', 
                  color: 'white', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  marginRight: '5px',
                  fontSize: '12px'
                }}>MongoDB</span>
                <span style={{ 
                  backgroundColor: '#5ED4F4', 
                  color: 'white', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  marginRight: '5px',
                  fontSize: '12px'
                }}>React</span>
                <span style={{ 
                  backgroundColor: '#2F75C0', 
                  color: 'white', 
                  padding: '4px 8px', 
                  borderRadius: '4px',
                  fontSize: '12px'
                }}>Node.js</span>
              </div>
              <a 
                href="https://github.com/AnshSolutions/StudyNotion" 
                target="_blank" 
                rel="noreferrer"
                style={{ 
                  color: '#007bff', 
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}
              >
                View on GitHub →
              </a>
            </div>

            {/* Project 3 */}
            <div style={{ 
              backgroundColor: 'white', 
              padding: '20px', 
              borderRadius: '8px', 
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              border: '1px solid #e0e0e0'
            }}>
              <h3 style={{ color: '#333', marginBottom: '10px' }}>Path Finder Visualizer</h3>
              <p style={{ color: '#666', marginBottom: '15px', lineHeight: '1.5' }}>
                An interactive pathfinding algorithm visualizer built with React and Tailwind CSS.
              </p>
              <div style={{ marginBottom: '15px' }}>
                <span style={{ 
                  backgroundColor: '#5ED4F4', 
                  color: 'white', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  marginRight: '5px',
                  fontSize: '12px'
                }}>React</span>
                <span style={{ 
                  backgroundColor: '#3FBDCC', 
                  color: 'white', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  marginRight: '5px',
                  fontSize: '12px'
                }}>Tailwind</span>
                <span style={{ 
                  backgroundColor: '#F7DF1E', 
                  color: 'black', 
                  padding: '4px 8px', 
                  borderRadius: '4px',
                  fontSize: '12px'
                }}>JavaScript</span>
              </div>
              <a 
                href="https://github.com/AnshSolutions/PathReact" 
                target="_blank" 
                rel="noreferrer"
                style={{ 
                  color: '#007bff', 
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}
              >
                View on GitHub →
              </a>
            </div>

            {/* Project 4 */}
            <div style={{ 
              backgroundColor: 'white', 
              padding: '20px', 
              borderRadius: '8px', 
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              border: '1px solid #e0e0e0'
            }}>
              <h3 style={{ color: '#333', marginBottom: '10px' }}>Tic Tac Toe Game</h3>
              <p style={{ color: '#666', marginBottom: '15px', lineHeight: '1.5' }}>
                A modern implementation of the classic Tic Tac Toe game built with React and Tailwind CSS.
              </p>
              <div style={{ marginBottom: '15px' }}>
                <span style={{ 
                  backgroundColor: '#5ED4F4', 
                  color: 'white', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  marginRight: '5px',
                  fontSize: '12px'
                }}>React</span>
                <span style={{ 
                  backgroundColor: '#3FBDCC', 
                  color: 'white', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  marginRight: '5px',
                  fontSize: '12px'
                }}>Tailwind</span>
                <span style={{ 
                  backgroundColor: '#F7DF1E', 
                  color: 'black', 
                  padding: '4px 8px', 
                  borderRadius: '4px',
                  fontSize: '12px'
                }}>JavaScript</span>
              </div>
              <a 
                href="https://github.com/AnshSolutions/tic-tac-toe" 
                target="_blank" 
                rel="noreferrer"
                style={{ 
                  color: '#007bff', 
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}
              >
                View on GitHub →
              </a>
            </div>

            {/* Project 5 */}
            <div style={{ 
              backgroundColor: 'white', 
              padding: '20px', 
              borderRadius: '8px', 
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              border: '1px solid #e0e0e0'
            }}>
              <h3 style={{ color: '#333', marginBottom: '10px' }}>DSA Visualizer</h3>
              <p style={{ color: '#666', marginBottom: '15px', lineHeight: '1.5' }}>
                A pure vanilla JavaScript implementation of Data Structures and Algorithms visualizer.
              </p>
              <div style={{ marginBottom: '15px' }}>
                <span style={{ 
                  backgroundColor: '#E34F26', 
                  color: 'white', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  marginRight: '5px',
                  fontSize: '12px'
                }}>HTML</span>
                <span style={{ 
                  backgroundColor: '#1572B6', 
                  color: 'white', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  marginRight: '5px',
                  fontSize: '12px'
                }}>CSS</span>
                <span style={{ 
                  backgroundColor: '#F7DF1E', 
                  color: 'black', 
                  padding: '4px 8px', 
                  borderRadius: '4px',
                  fontSize: '12px'
                }}>JavaScript</span>
              </div>
              <a 
                href="https://github.com/AnshSolutions/Algorithm-Visualizer-" 
                target="_blank" 
                rel="noreferrer"
                style={{ 
                  color: '#007bff', 
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}
              >
                View on GitHub →
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
