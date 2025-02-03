import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import Counter from './components/Counter';
import UserForm from './components/UserForm';
import Editor from './components/Editor';

export default function App() {
  return (
    <Router>

      <AppBar position="static" sx={{ backgroundColor: '#ADD8E6' }}>
        <Toolbar>
          <Button 
            component={Link} 
            to="/" 
            color="inherit" 
            sx={{ backgroundColor: '#A9A9A9', marginRight: 2, ':hover': { backgroundColor: 'primary.main' } }}
          >
            Counter
          </Button>
          <Button 
            component={Link} 
            to="/form" 
            color="inherit" 
            sx={{ backgroundColor: '#A9A9A9', marginRight: 2, ':hover': { backgroundColor: 'primary.main' } }}
          >
            Form
          </Button>
          <Button 
            component={Link} 
            to="/editor" 
            color="inherit" 
            sx={{ backgroundColor: '#A9A9A9', ':hover': { backgroundColor: 'primary.main' } }}
          >
            Editor
          </Button>
        </Toolbar>
      </AppBar>

      <Container>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/form" element={<UserForm />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </Container>
    </Router>
  );
}
