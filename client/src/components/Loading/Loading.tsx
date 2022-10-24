import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => (
  <div style={{
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
  >
    <CircularProgress />
  </div>
);

export default Loading;
