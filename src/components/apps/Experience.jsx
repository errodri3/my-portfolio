function Experience() {
  return (
    <div style={{ fontSize: '13px', color: '#4a6a90', lineHeight: '1.6' }}>

      <div style={{
        background: 'rgba(200,220,245,0.4)',
        borderRadius: '10px',
        padding: '14px 16px',
        marginBottom: '14px',
      }}>
        <div style={{
          fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em',
          color: '#7aaad0', marginBottom: '10px', textTransform: 'uppercase',
        }}>
          education
        </div>
        <div style={{
          background: 'rgba(255,255,255,0.5)',
          borderRadius: '8px',
          padding: '8px 12px',
          marginBottom: '6px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div>
            <div style={{ fontWeight: '700', fontSize: '12px' }}>B.S. Informatics — HCI</div>
            <div style={{ fontSize: '11px', opacity: 0.7 }}>University of California, Irvine</div>
          </div>
          <div style={{ fontSize: '11px', opacity: 0.6, whiteSpace: 'nowrap' }}>2023 – 2027</div>
        </div>
        <div style={{
          background: 'rgba(255,255,255,0.5)',
          borderRadius: '8px',
          padding: '8px 12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div>
            <div style={{ fontWeight: '700', fontSize: '12px' }}>CodePath Intermediate Web Dev</div>
            <div style={{ fontSize: '11px', opacity: 0.7 }}>Certification</div>
          </div>
          <div style={{ fontSize: '11px', opacity: 0.6 }}>2026</div>
        </div>
      </div>

      <div style={{
        background: 'rgba(200,220,245,0.4)',
        borderRadius: '10px',
        padding: '14px 16px',
        marginBottom: '14px',
      }}>
        <div style={{
          fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em',
          color: '#7aaad0', marginBottom: '10px', textTransform: 'uppercase',
        }}>
          languages
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {['HTML/CSS', 'JavaScript', 'TypeScript', 'Python', 'Java', 'SQL'].map(skill => (
            <span key={skill} style={{
              background: 'rgba(160,200,240,0.4)',
              border: '1px solid rgba(255,255,255,0.7)',
              borderRadius: '20px',
              padding: '3px 10px',
              fontSize: '11px',
              fontWeight: '600',
              color: '#4a6a90',
            }}>{skill}</span>
          ))}
        </div>
      </div>

      <div style={{
        background: 'rgba(200,220,245,0.4)',
        borderRadius: '10px',
        padding: '14px 16px',
        marginBottom: '14px',
      }}>
        <div style={{
          fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em',
          color: '#7aaad0', marginBottom: '10px', textTransform: 'uppercase',
        }}>
          frameworks & libraries
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {['React', 'Angular', 'Ionic', 'Node.js', 'Express'].map(skill => (
            <span key={skill} style={{
              background: 'rgba(240,190,210,0.4)',
              border: '1px solid rgba(255,255,255,0.7)',
              borderRadius: '20px',
              padding: '3px 10px',
              fontSize: '11px',
              fontWeight: '600',
              color: '#904a6a',
            }}>{skill}</span>
          ))}
        </div>
      </div>

      <div style={{
        background: 'rgba(200,220,245,0.4)',
        borderRadius: '10px',
        padding: '14px 16px',
        marginBottom: '14px',
      }}>
        <div style={{
          fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em',
          color: '#7aaad0', marginBottom: '10px', textTransform: 'uppercase',
        }}>
          design & ux
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {['Figma', 'UI/UX Design', 'User Research', 'Usability Testing', 'Information Architecture', 'Mobile UX'].map(skill => (
            <span key={skill} style={{
              background: 'rgba(170,230,210,0.4)',
              border: '1px solid rgba(255,255,255,0.7)',
              borderRadius: '20px',
              padding: '3px 10px',
              fontSize: '11px',
              fontWeight: '600',
              color: '#3a7a65',
            }}>{skill}</span>
          ))}
        </div>
      </div>

      <div style={{
        background: 'rgba(200,220,245,0.4)',
        borderRadius: '10px',
        padding: '14px 16px',
      }}>
        <div style={{
          fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em',
          color: '#7aaad0', marginBottom: '10px', textTransform: 'uppercase',
        }}>
          cloud & tools
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {['AWS', 'Git/GitHub', 'RESTful APIs', 'OAuth', 'Database Design'].map(skill => (
            <span key={skill} style={{
              background: 'rgba(250,235,170,0.4)',
              border: '1px solid rgba(255,255,255,0.7)',
              borderRadius: '20px',
              padding: '3px 10px',
              fontSize: '11px',
              fontWeight: '600',
              color: '#907030',
            }}>{skill}</span>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Experience