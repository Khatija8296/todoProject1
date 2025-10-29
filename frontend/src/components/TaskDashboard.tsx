import ColorToggleButton from './ColorToggleButton';
import SimpleTable from './SimpleTable';

const TaskDashboard = () => {
  return (
    <div style={{ minHeight: '10vh' }}>
      <header
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '60px 0',
          textAlign: 'center',
          color: 'white',
          fontSize: '3rem',
          fontWeight: 'bold',
          minHeight: '10vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '40px'
        }}
      >
        Todo List
      </header>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        padding: '40px 0' 
      }}>
        <ColorToggleButton />
      </div>
      <div style={{ padding: '20px' }}>
        <SimpleTable />
      </div>
    </div>
  )
}

export default TaskDashboard