import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { Button, Box, Typography, Card, CardContent } from '@mui/material';

export default function AnimatedCounter() {
  const [value, setValue] = useState(() => {
    return Number(localStorage.getItem('counterValue')) || 0;
  });

  const [animatedHeight, setAnimatedHeight] = useState(0);

  useEffect(() => {
    localStorage.setItem('counterValue', value.toString());
    setAnimatedHeight(Math.min(100, value * 10));
  }, [value]);

  const springStyles = useSpring({
    height: `${animatedHeight}%`,
    config: { tension: 120, friction: 14, precision: 0.1 }
  });

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      sx={{ position: 'relative' }} 
    >
      <animated.div
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          backgroundColor: '#FFEB3B', 
          ...springStyles,
        }}
      />

      <Card sx={{ minWidth: 320, zIndex: 1, p: 3, textAlign: 'center', boxShadow: 5 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
           
            Counter 
            <br/>
            {value}
          </Typography>


          <Box 
            display="flex"
            gap={2}
            sx={{
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Button variant="contained" color="primary" onClick={() => setValue(prev => prev + 1)}>
              Increase
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setValue(prev => (prev > 0 ? prev - 1 : 0))}
            >
              Decrease
            </Button>
            <Button variant="contained" color="error" onClick={() => setValue(0)}>
              Reset
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
